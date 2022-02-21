import { useEffect, useRef } from "react";
import { getGames } from "../../utils/games";

export default function GameRenderer({ game }) {
    const gameFrame = useRef();

    useEffect(() => {
        gameFrame.current.focus();
    })

    return (
        <iframe src={game} ref={gameFrame} className="h-screen w-screen" />
    )
}

export async function getStaticProps({ params }) {
    const games = await getGames();
    const game = games.find(g => g.page === params.game);

    return {
        props: {
            game: game.href
        }
    }
}

export async function getStaticPaths() {
    const games = await getGames();
    const paths = games.map(g => ({ params: { game: g.page } }));

    return {
        paths,
        fallback: false
    }
}