"use client";
import { useEffect, useState } from "react";

type TextProps = {
  texts: string[];
};

export default function RotatingText({ texts }: TextProps) {
  const [index, setIndex] = useState(0);
  const count = texts.length;

  useEffect(() => {
    if (count < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, 2000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="relative h-8 overflow-hidden text2 font-medium w-full text-left">
      <div
        className="transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(-${index * 2}rem)`,
        }}
      >
        {texts.map((text, i) => (
          <div key={text} aria-hidden={i !== index} className="h-8 flex items-center">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
