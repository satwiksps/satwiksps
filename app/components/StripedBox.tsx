export default function StripedBox() {
  return (
    <div className="relative w-full border-b h-10 overflow-hidden">
      <div
        className="
                absolute inset-0
                bg-[repeating-linear-gradient(45deg,var(--bg2)_0,var(--bg2)_2px,transparent_1px,transparent_10px)]
                opacity-30"
      />
      <div className="innerContainer relative h-full" />
    </div>
  );
}
