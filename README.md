# Inconel

Inconel is a Next.js site for browsing through a web proxy when the usual path is blocked. It also ships a browser games catalog and a few bookmarklets for cloaking a tab or working around page restrictions.

## Pages

| Route | What it does |
| --- | --- |
| `/` | Home, with links to Surf, Games, and Utilities. |
| `/surf` | Enter a URL. The form posts it to a [TestCafe Hammerhead](https://github.com/DevExpress/testcafe-hammerhead) playground, which opens a rewritten session of that page. |
| `/games` | Searchable catalog of HTML games plus Genesis, GBA, N64, NES, and SNES emulators. |
| `/games/[game]` | Full-screen player for one title. |
| `/utilities` | Bookmarklets. Drag a card to the bookmarks bar; click it to read the description. |
| `/settings` | Light or dark theme, and tab cloaking (preset or custom title and icon). |

Tab cloak and theme are stored in cookies and applied on every page.

## Surf

`/surf` normalizes the address (adding `https://` when needed) and `POST`s it as `url` to `NEXT_PUBLIC_PROXY_URL`. That URL is the Hammerhead playground, which listens on port **1400** and redirects into a proxied session on ports **1401** and **1402**.

The playground binds session hosts to `localhost`, so the browser has to be able to reach those three ports on the machine running Hammerhead. The Docker image starts both processes and publishes all three ports. A local `npm run dev` only starts Next.js; Surf needs a playground already running at `NEXT_PUBLIC_PROXY_URL`.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env
npm run dev
```

The site is at [http://localhost:3000](http://localhost:3000). Point `NEXT_PUBLIC_PROXY_URL` in `.env` at a Hammerhead playground before using Surf. From a Hammerhead checkout:

```bash
node node_modules/gulp/bin/gulp http-playground
```

That serves the playground at [http://localhost:1400](http://localhost:1400), which matches the default used by the Docker build.

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint
npm run analyze  # production build with the bundle analyzer
```

`NEXT_PUBLIC_PROXY_URL` is inlined at build time. Change it in `.env` and rebuild (or restart `npm run dev`) before it takes effect.

## Docker

The image clones and builds Hammerhead, builds the Next.js app, then starts both. The site listens on port 3000. Hammerhead uses 1400 for new sessions and 1401–1402 for proxied traffic.

```bash
docker build -t inconel .
docker run --rm -p 3000:3000 -p 1400:1400 -p 1401:1401 -p 1402:1402 inconel
```

Build arguments:

| Argument | Default | Purpose |
| --- | --- | --- |
| `HAMMERHEAD_REPO` | `https://github.com/DevExpress/testcafe-hammerhead.git` | Proxy source to clone. |
| `HAMMERHEAD_REF` | `master` | Branch or tag to build. |
| `NEXT_PUBLIC_PROXY_URL` | `http://localhost:1400` | Playground URL the Surf form posts to. |

The container command is `all` (Next.js and the proxy) or `proxy` (playground only):

```bash
docker run --rm -p 1400:1400 -p 1401:1401 -p 1402:1402 inconel proxy
```

## Games

HTML games are static files under `public/htmlgames/<name>/`. `utils/games.js` reads that directory at build time and adds the emulator entries. Emulators are [webretro](https://github.com/BinBashBanana/webretro) at `public/emulator/`, opened with a core query (`genesis_plus_gx`, `mgba`, `mupen64plus_next`, `nestopia`, `snes9x`). Drop a new game folder in `public/htmlgames` and it shows up in the catalog after the next build.

## Stack

Next.js 16, React 19, and Tailwind CSS 4. TestCafe Hammerhead provides the proxy. webretro provides the console emulators.
