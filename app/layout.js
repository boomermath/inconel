import { Outfit } from "next/font/google";
import Providers from "../components/Providers";
import Shell from "../components/Shell";
import TabCloak from "../components/TabCloak";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Inconel",
  description: "Inconel, web surfing in style.",
  keywords: ["Drive", "Website", "Style"],
  authors: [{ name: "boomermath" }],
  icons: {
    icon: "/img/inconel.ico",
  },
  openGraph: {
    siteName: "Inconel",
    description: "Inconel, web surfing in style.",
    images: ["/img/googleDrive.ico"],
  },
};

const themeInitScript = `
(function(){
  try {
    var m = document.cookie.match(/(?:^|; )theme=([^;]*)/);
    if (m && decodeURIComponent(m[1]) === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans">
        <Providers>
          <TabCloak />
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  );
}
