"use client";

import { useState } from "react";

export default function Surf() {
  const [url, setURL] = useState("");

  const handle = (e) => {
    e.preventDefault();

    const browse = !url.startsWith("http") ? `https://${url}` : url;

    try {
      new URL(browse);
    } catch {
      return alert(url.length ? "Invalid url!" : "Enter a url!");
    }

    e.target.reset();
    setURL("");
    window.location.href = `https://www.nebulaofficial.gq/proxy/${btoa(browse.toString())}`;
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          Surf Freely
        </h1>
        <p className="text-ink/70 dark:text-paper/70 text-base sm:text-lg">
          Enter a URL and open it through the proxy.
        </p>
      </header>

      <form
        className="rounded-xl border-2 border-ink/15 dark:border-paper/20 bg-white/50 dark:bg-ink/30 p-4 sm:p-6"
        onSubmit={handle}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            className="input"
            placeholder="https://www.google.com"
            value={url}
            onChange={(e) => setURL(e.target.value)}
            required
            aria-label="URL to browse"
          />
          <button className="button shrink-0 min-h-11" type="submit">
            Go
          </button>
        </div>
      </form>
    </div>
  );
}
