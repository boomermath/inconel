import NextLink from "next/link";
import SettingsSvg from "./SettingsSvg";

function Link({ href, children }) {
    return (
        <NextLink href={href}>
            <a className="text-xl float-left transform duration-300 border-b-2 border-transparent hover:border-brown dark:hover:border-gray-200 hover:-translate-y-1 hover:scale-125">{children}</a>
        </NextLink>
    )
}


export default function Navigation() {
    return (
        <nav className="bg-white dark:bg-black border-b-4 border-brown dark:border-gray-200 overflow-hidden text-center space-x-12 p-10">
            <Link href="/">Home</Link>
            <Link href="/surf">Surf</Link>
            <Link href="/games">Games</Link>
            <Link href="/utilities">Utilities</Link>
            <SettingsSvg />
        </nav>
    )
}