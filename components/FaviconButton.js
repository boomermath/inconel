"use client";

import Image from "next/image";
import { useCookies } from "react-cookie";

export default function FaviconButton({ src, title }) {
  const [, setCookie] = useCookies(["title", "favicon"]);

  const setTab = () => {
    setCookie("title", title, { path: "/" });
    setCookie("favicon", src, { path: "/" });
  };

  return (
    <button
      className="inline-flex items-center justify-center rounded-lg border border-ink/15 dark:border-paper/20 bg-copper/10 dark:bg-paper/10 p-2.5 hover:border-copper hover:bg-copper/20 transition-colors"
      type="button"
      onClick={setTab}
      title={title}
      aria-label={`Cloak tab as ${title}`}
    >
      <Image src={src} width={24} height={24} alt="" />
    </button>
  );
}
