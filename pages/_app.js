import { useRouter } from "next/router";
import { CookiesProvider } from "react-cookie";

import Header from "../components/Header";
import Background from "../components/Background";
import Navigation from "../components/Nav";

import "../styles/globals.css";

export default function Inconel({ Component, pageProps }) {
  const router = useRouter();

  //if its a game page
  if (router.query.game) {
    return (
      <CookiesProvider>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </CookiesProvider>
    )
  }

  return (
    <CookiesProvider>
      <main>
        <Header />
        <Background>
          <Navigation />
          <Component {...pageProps} />
        </Background>
      </main>
    </CookiesProvider>
  )
}
