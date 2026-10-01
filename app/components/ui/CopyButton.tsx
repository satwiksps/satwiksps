"use client";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

type textProps = {
    text: string
}

export default function CopyButton({text}: textProps) {
  const [copied, setCopied] = useState(false);

  return (
    <button
  aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
  onClick={async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }}
  className="
    flex size-11 shrink-0 items-center justify-center rounded-lg hover:bg-[var(--bg2)]
    transition-all duration-200
    text2
  "
>
  {copied ? (
    <Check className="size-4" />
  ) : (
    <Copy className="size-4" />
  )}
</button>
  );
}
