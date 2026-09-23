"use client";

import { useEffect, useRef } from "react";

export default function GamePlayer({ src }) {
  const gameFrame = useRef(null);

  useEffect(() => {
    gameFrame.current?.focus();
  }, []);

  return (
    <iframe
      src={src}
      ref={gameFrame}
      title="Game"
      className="h-dvh w-full border-0 block"
    />
  );
}
