"use client";

import { useEffect, useState } from "react";

interface InlineSvgProps {
  src: string; // URL path to the .svg file
  className?: string;
}

export default function InlineSvg({ src, className }: InlineSvgProps) {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const res = await fetch(src);
        const text = await res.text();
        setSvgContent(text);
      } catch (err) {
        console.error(`Error loading SVG at ${src}`, err);
      }
    };

    fetchSvg();
  }, [src]);

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
