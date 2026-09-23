import { getGames } from "../../utils/games";
import GamesBrowser from "../../components/GamesBrowser";

export default async function GamesPage() {
  const games = await getGames();

  return <GamesBrowser games={games.map((g) => g.toJSON())} />;
}
