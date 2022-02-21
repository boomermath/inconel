import { useRouter } from "next/router";

import Header from "../components/Header";
import Background from "../components/Background";
import Navigation from "../components/Nav";

import "../styles/globals.css";


export default function Inconel({ Component, pageProps }) {
  const router = useRouter();

  //if its a game page
  if (router.query.game) {
    return (
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    )
  }

  return (
    <main>
      <Header />
      <Background>
        <Navigation />
        <Component {...pageProps} />
      </Background>
    </main>
  )
}
