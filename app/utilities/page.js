"use client";

import bookmarklets from "../../utils/bookmarklets";

export default function Utilities() {
  const details = (event, description) => {
    event.preventDefault();
    alert(description);
  };

  return (
    <div className="space-y-8">
      <header className="max-w-2xl space-y-3">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          Utilities
        </h1>
        <p className="text-ink/70 dark:text-paper/70 text-base sm:text-lg leading-relaxed">
          Bookmarklets that help bypass web restrictions or make life easier.
          Drag a card to your bookmarks bar to save it. Click to read more.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(bookmarklets).map(([name, bookmark]) => (
          <a
            key={name}
            className="block rounded-xl border-2 border-ink/15 dark:border-paper/20 bg-white/50 dark:bg-ink/30 p-4 sm:p-5 text-left transition-colors hover:border-copper hover:bg-copper/10 dark:hover:bg-copper/15 sm:hover:scale-[1.02] sm:transform sm:duration-200"
            title={bookmark.description}
            onClick={(e) => details(e, bookmark.description)}
            href={`javascript:${bookmark.code}`}
          >
            <h2 className="text-lg font-semibold text-ink dark:text-paper mb-2">
              {name}
            </h2>
            <p className="text-sm text-ink/70 dark:text-paper/70 leading-relaxed">
              {bookmark.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
