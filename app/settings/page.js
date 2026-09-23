"use client";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDarkMode } from "../../components/Hooks";
import FaviconButton from "../../components/FaviconButton";

export default function Settings() {
  const [, setCookie] = useCookies(["title", "favicon"]);
  const [theme, toggleTheme] = useDarkMode();
  const [text, setText] = useState("Theme");

  useEffect(() => {
    setText(theme === "dark" ? "Light" : "Dark");
  }, [theme]);

  const handle = (e) => {
    e.preventDefault();

    if (!e.target.title.value && !e.target.favicon.value) {
      alert("Please enter a title or favicon URL!");
      return;
    }
    if (e.target.title.value) {
      setCookie("title", e.target.title.value, { path: "/" });
    }
    if (e.target.favicon.value) {
      setCookie("favicon", e.target.favicon.value, { path: "/" });
    }

    e.target.reset();
  };

  return (
    <div className="max-w-xl space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          Settings
        </h1>
        <p className="text-ink/70 dark:text-paper/70 text-base sm:text-lg">
          Appearance and tab cloaking.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Appearance</h2>
        <button className="button min-h-11" onClick={toggleTheme} type="button">
          Switch to {text}
        </button>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tab cloak</h2>
        <div className="flex flex-wrap gap-2">
          <FaviconButton title="Inconel" src="/img/inconel.ico" />
          <FaviconButton title="My Drive - Google Drive" src="/img/googleDrive.ico" />
          <FaviconButton title="Google Slides" src="/img/googleSlides.ico" />
          <FaviconButton title="Zoom" src="/img/zoom.ico" />
        </div>

        <form className="space-y-4" onSubmit={handle}>
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="title">
              Title
            </label>
            <input
              className="input"
              id="title"
              name="title"
              type="text"
              placeholder="Zoom"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="favicon">
              Icon URL
            </label>
            <input
              className="input"
              id="favicon"
              name="favicon"
              type="url"
              placeholder="https://youricon.com/icon.png"
            />
          </div>
          <button className="button min-h-11" type="submit">
            Change
          </button>
        </form>
      </section>
    </div>
  );
}
