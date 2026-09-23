import Link from "next/link";

const destinations = [
  {
    href: "/surf",
    title: "Surf",
    description: "Browse freely through a proxy when the usual doors are closed.",
  },
  {
    href: "/games",
    title: "Games",
    description: "HTML games and console emulators, ready to play in the browser.",
  },
  {
    href: "/utilities",
    title: "Utilities",
    description: "Bookmarklets for cloaking, inspecting, and small page tricks.",
  },
];

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <header className="max-w-2xl space-y-4">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ink dark:text-paper">
          Inconel
        </h1>
        <p className="text-lg sm:text-xl text-ink/75 dark:text-paper/75 leading-relaxed">
          Take back your freedom and privacy.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {destinations.map(({ href, title, description }) => (
          <Link
            key={href}
            href={href}
            className="rounded-xl border-2 border-ink/15 dark:border-paper/20 bg-white/50 dark:bg-ink/30 p-5 sm:p-6 transition-colors hover:border-copper hover:bg-copper/10 dark:hover:bg-copper/15"
          >
            <h2 className="text-xl font-semibold text-ink dark:text-paper mb-2">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-ink/70 dark:text-paper/70 leading-relaxed">
              {description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
