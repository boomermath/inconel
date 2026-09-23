"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Nav";

export default function Shell({ children }) {
  const pathname = usePathname();
  const isGamePlayer = /^\/games\/[^/]+$/.test(pathname);

  if (isGamePlayer) {
    return <main>{children}</main>;
  }

  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-paper dark:bg-graphite"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(196,98,45,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(196,98,45,0.08),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(196,98,45,0.22),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(196,98,45,0.1),_transparent_50%)]"
      />
      <Navigation />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        {children}
      </main>
    </div>
  );
}
