"use client";
import { useEffect, useState } from "react";

type TextProps = {
  texts: string[];
  align?: "left" | "center" | "right";
};

export default function RotatingText({ texts, align = "left" }: TextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const alignClass = {
    left: "justify-start text-left",
    center: "justify-center text-center",
    right: "justify-end text-right",
  }[align];

  return (
    <div className={`relative h-8 overflow-hidden text2 font-medium w-full ${alignClass}`}>
      <div
        className="transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(-${index * 2}rem)`,
        }}
      >
        {texts.map((text, i) => (
          <div key={i} className={`h-8 flex items-center ${alignClass}`}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}