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
  onClick={() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }}
  className="
    opacity-0 translate-x-1
    transition-all duration-200
    group-hover:opacity-100 group-hover:translate-x-0
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