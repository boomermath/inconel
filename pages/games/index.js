import { useEffect, useState } from "react";
import GameCard from "../../components/GameCard";
import { getGames } from "../../utils/games";


export default function Games({ games }) {
    const [gameView, setGameView] = useState(games);
    const [query, setQuery] = useState();
    const [category, setCategory] = useState();

    useEffect(() => {
        category ? setGameView(games.filter(e => e.type === category)) : setGameView(games);

        if (query) {
            setGameView(gameView => gameView.filter(e => e.title.toLowerCase().startsWith(query.toLowerCase())));
        }
    }, [category, query, games])

    return (
        <div className="pt-20">
            <h1 className="text-8xl">Games</h1> <br /> <br />
            <div>
                <h2 className="text-4xl m-1">Search</h2>
                <input type="search" className="input h-8 m-3" onChange={(e) => setQuery(e.target.value)} /> <br />
                <select className="bg-white dark:bg-black text-lg outline-none" onChange={(e) => setCategory(e.target.value)}>
                    <option value="" defaultChecked>All</option>
                    <option value="html">HTML Games</option>
                    <option value="emulator">Emulators</option>
                </select>
            </div> <br />
            <div>
                {
                    gameView.length ?
                        gameView.map(g => <GameCard key={g.href} {...g} />) :
                        <h1 className="text-4xl m-6">No results found!</h1>
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const games = await getGames();

    return {
        props: { games: games.map(g => g.toJSON()) }
    }
}