import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";


export function useDarkMode() {
    const [{ theme }, setTheme] = useCookies(["theme"]);

    useEffect(() => {
        if (!theme) {
            const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            setTheme("theme", theme, { path: "/" });
        }

        window.document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme])

    const toggleTheme = () => {
        setTheme("theme", theme === "dark" ? "light" : "dark", { path: "/" });
    }

    return [theme, toggleTheme];
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: null,
        height: null
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}