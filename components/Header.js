import Head from "next/head";
import { useCookies } from "react-cookie";

export default function Header() {
    const [cookies] = useCookies(["title", "favicon"]);

    const title = cookies.title ?? "Inconel";
    const icon = cookies.favicon ?? "/img/inconel.ico";

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href={icon} />
            <meta name="description" property="og:description" content="Inconel, web surfing in style." />
            <meta name="keywords" content="Drive, Website, Style" />
            <meta name="author" content="boomermath" />
            <meta property="og:image" content="/img/googleDrive.ico" />
            <meta property="og:site_name" content="Inconel" />
        </Head>
    )
}