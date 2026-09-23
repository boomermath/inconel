"use client";

import { useEffect } from "react";
import { useCookies } from "react-cookie";

export default function TabCloak() {
  const [cookies] = useCookies(["title", "favicon"]);

  useEffect(() => {
    const title = cookies.title ?? "Inconel";
    const icon = cookies.favicon ?? "/img/inconel.ico";

    document.title = title;

    let link = document.querySelector("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = icon;
  }, [cookies.title, cookies.favicon]);

  return null;
}
