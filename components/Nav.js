import Link from "next/link";
import SettingsSvg from "./SettingsSvg";

const links = [
  { href: "/", label: "Home" },
  { href: "/surf", label: "Surf" },
  { href: "/games", label: "Games" },
  { href: "/utilities", label: "Utilities" },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-40 border-b border-ink/10 dark:border-paper/10 bg-paper/90 dark:bg-graphite/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-ink dark:text-paper hover:text-copper transition-colors"
          >
            Inconel
          </Link>
          <div className="sm:hidden">
            <SettingsSvg />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1 sm:flex sm:items-center sm:gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="min-h-11 sm:min-h-0 inline-flex items-center justify-center rounded-md px-2 text-sm sm:text-base font-medium text-ink/80 dark:text-paper/80 hover:text-copper dark:hover:text-copper border border-transparent hover:border-copper/30 sm:hover:border-transparent sm:border-b-2 sm:border-b-transparent sm:rounded-none sm:hover:border-b-copper transition-colors"
            >
              {label}
            </Link>
          ))}
          <div className="hidden sm:block">
            <SettingsSvg />
          </div>
        </div>
      </div>
    </nav>
  );
}
