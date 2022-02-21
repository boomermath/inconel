import Image from "next/image";
import { useCookies } from "react-cookie";

export default function FaviconButton({ src, title }) {
    const [, setCookie] = useCookies(["title", "favicon"])

    const setTab = () => {
        setCookie("title", title, { path: "/" });
        setCookie("favicon", src, { path: "/" });
    }

    return (
        <button className="pt-2 pl-2 pr-2 bg-brown dark:bg-gray-300 hover:bg-purple-300 dark:hover:bg-red-600 rounded-xl" type="reset" onClick={setTab}>
            <Image src={src} width="24" height="24" alt="Tab icon" />
        </button>
    )
}