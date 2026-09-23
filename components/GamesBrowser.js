"use client";

import { useEffect, useState } from "react";
import GameCard from "./GameCard";

export default function GamesBrowser({ games }) {
  const [gameView, setGameView] = useState(games);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    let next = category
      ? games.filter((e) => e.type === category)
      : games;

    if (query) {
      next = next.filter((e) =>
        e.title.toLowerCase().startsWith(query.toLowerCase())
      );
    }

    setGameView(next);
  }, [category, query, games]);

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          Games
        </h1>
        <p className="text-ink/70 dark:text-paper/70 text-base sm:text-lg">
          Search the catalog or filter by type.
        </p>
      </header>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
        <div className="flex-1 space-y-2">
          <label className="block text-sm font-medium" htmlFor="game-search">
            Search
          </label>
          <input
            id="game-search"
            type="search"
            className="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Start typing a title"
          />
        </div>
        <div className="space-y-2 sm:w-48">
          <label className="block text-sm font-medium" htmlFor="game-category">
            Category
          </label>
          <select
            id="game-category"
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="html">HTML Games</option>
            <option value="emulator">Emulators</option>
          </select>
        </div>
      </div>

      {gameView.length ? (
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {gameView.map((g) => (
            <GameCard key={g.href} {...g} />
          ))}
        </div>
      ) : (
        <p className="text-lg text-ink/70 dark:text-paper/70">No results found!</p>
      )}
    </div>
  );
}
