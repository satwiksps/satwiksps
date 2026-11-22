import digitImages from "../../data/profile-counter-digits.json";

export const dynamic = "force-dynamic";

const startingCount = 8438;
const counterUrl = `https://komarev.com/ghpvc/?username=satwiksps&label=views&base=${startingCount}`;
const sprites: Record<string, string> = digitImages;
const headers = {
  "Content-Type": "image/svg+xml; charset=utf-8",
  "Cache-Control": "max-age=0, no-cache, no-store, must-revalidate",
  "X-Content-Type-Options": "nosniff",
};

// Digit artwork from journey-ad/Moe-Counter, assets/theme/moebooru.
// Pinned source: ba5b1fa9758b467e4436128ca2c9708f99d2977b.
export async function GET(request: Request) {
  try {
    const userAgent = request.headers.get("user-agent") ?? "";
    const response = await fetch(counterUrl, {
      cache: "no-store",
      headers: {
        Accept: "image/svg+xml",
        // The persistent service records requests from GitHub's image proxy.
        "User-Agent": userAgent.startsWith("github-camo")
          ? userAgent
          : "satwiksps-profile-counter/1.0",
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      throw new Error(`Counter service returned ${response.status}`);
    }

    const badge = await response.text();
    const values = [...badge.matchAll(/<text\b[^>]*>([\d,]+)<\/text>/g)];
    const value = values.at(-1)?.[1];
    const count = Number(value?.replaceAll(",", ""));

    if (!Number.isSafeInteger(count) || count < startingCount) {
      throw new Error("Counter service returned an invalid count");
    }

    const digits = String(count).padStart(7, "0").split("");
    const width = digits.length * 45;
    const images = digits.map((digit, index) => (
      `<image x="${index * 45}" width="45" height="100" href="${sprites[digit]}" />`
    )).join("");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="100" viewBox="0 0 ${width} 100" role="img" aria-label="Profile views: ${count}">
<title>Profile views: ${count}</title>
<style>image{image-rendering:pixelated}@media(prefers-color-scheme:dark){image{filter:brightness(.6)}}</style>
${images}
</svg>`;

    return new Response(svg, { headers });
  } catch (error) {
    console.error("Unable to load the profile counter", error);
    return new Response(
      '<svg xmlns="http://www.w3.org/2000/svg" width="315" height="100" role="img" aria-label="Profile counter temporarily unavailable"><text x="10" y="50" fill="#808080" font-family="sans-serif" font-size="14">Profile counter temporarily unavailable</text></svg>',
      { status: 503, headers },
    );
  }
}

export function HEAD() {
  return new Response(null, { headers });
}
