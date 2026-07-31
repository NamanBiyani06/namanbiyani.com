"use client";

import { useRef, useState } from "react";

export default function BlogButton() {
  const [clicks, setClicks] = useState(0);
  const btnRef = useRef<HTMLButtonElement>(null);

  const messages = [
    "read the blog →",
    "coming soon :)",
    "still writing...",
    "patience!",
    "ok it's really not ready yet",
  ];

  const handleClick = () => {
    setClicks((c) => c + 1);
    const btn = btnRef.current;
    if (btn) {
      btn.classList.remove("shake");
      // restart the shake animation on every click
      void btn.offsetWidth;
      btn.classList.add("shake");
    }
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className="cursor-pointer rounded-md border border-dashed border-muted px-4 py-2 text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
    >
      {messages[Math.min(clicks, messages.length - 1)]}
    </button>
  );
}
