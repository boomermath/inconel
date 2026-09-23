import { notFound } from "next/navigation";
import { getGames } from "../../../utils/games";
import GamePlayer from "../../../components/GamePlayer";

export async function generateStaticParams() {
  const games = await getGames();
  return games.map((g) => ({ game: g.page }));
}

export default async function GamePage({ params }) {
  const { game: page } = await params;
  const games = await getGames();
  const game = games.find((g) => g.page === page);

  if (!game) {
    notFound();
  }

  return <GamePlayer src={game.href} />;
}
