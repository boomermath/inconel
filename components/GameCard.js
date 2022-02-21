import Image from "next/image";
import Link from "next/link";

export default function GameCard({ title, page, img }) {
    return (
        <Link href="/games/[game]" as={`/games/${page}`}>
            <a className="group bg-white dark:bg-black hover:bg-brown dark:hover:bg-white border-4 border-brown dark:border-white p-4 m-7 inline-block rounded-lg transform duration-300 hover:scale-110">
                <Image src={img} height="200" width="200" alt={title} priority="true" /> <br /> <br />
                <span className="group-hover:text-white dark:group-hover:text-black">{title}</span> 
            </a>
        </Link>
    )
}