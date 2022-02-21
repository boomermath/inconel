import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDarkMode } from "../components/Hooks";
import FaviconButton from "../components/FaviconButton";

export default function Settings() {
    const [, setCookie] = useCookies(["title", "favicon"])
    const [theme, toggleTheme] = useDarkMode();
    const [text, setText] = useState();

    useEffect(() => {
        setText(theme === "dark" ? "Light" : "Dark");
    }, [theme])

    const handle = (e) => {
        e.preventDefault();

        if (!e.target.title.value && !e.target.favicon.value) {
            alert("Please enter a title or favicon URL!");
        }
        if (e.target.title.value) {
            setCookie("title", e.target.title.value, { path: "/" });
        }
        if (e.target.favicon.value) {
            setCookie("favicon", e.target.favicon.value, { path: "/" });
        }

        e.target.reset();
    }

    return (
        <form className="pt-20 pb-20 space-y-6 space-x-3" onSubmit={handle}>
            <legend className="text-7xl pl-7">Settings</legend>
            <h2 className="text-3xl">Theme</h2>
            <button className="button text-xl p-3 rounded-lg" onClick={toggleTheme} type="button">{text}</button>
            <br />
            <h2 className="text-3xl">Tab Cloak</h2>
            <FaviconButton title="Inconel" src="/img/inconel.ico" />
            <FaviconButton title="My Drive - Google Drive" src="/img/googleDrive.ico" />
            <FaviconButton title="Google Slides" src="/img/googleSlides.ico" />
            <FaviconButton title="Zoom" src="/img/zoom.ico" />
            <br />
            <label className="text-xl" htmlFor="title">Title</label>
            <input className="input w-1/5 h-8" name="title" type="text" placeholder="Zoom" /> <br />
            <label className="text-xl" htmlFor="favicon">Icon</label>
            <input className="input w-1/4 h-8" name="favicon" type="url" placeholder="https://youricon.com/icon.png" /> <br />
            <button className="button text-2xl p-3 rounded-md" type="submit">Change</button>
        </form>
    )
}