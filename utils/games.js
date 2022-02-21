const { readdir } = require("fs/promises");
const title = g => g.split("-").map(g => `${g[0].toUpperCase()}${g.slice(1)}`).join(" ");

class Game {
    constructor(opts = {}) {
        this.title = opts.title || title(opts.page);
        this.href = opts.href || `/htmlgames/${opts.page}/index.html`;
        this.img = `/img/${opts.page}.png`;
        this.page = opts.page;
        this.type = opts.type;
    }

    toJSON() {
        return {
            title: this.title,
            href: this.href,
            img: this.img,
            page: this.page,
            type: this.type
        }
    }
}

const emulators = [
    new Game({
        title: "Genesis",
        href: "/emulator/index.html?core=genesis_plus_gx",
        page: "genesis",
        type: "emulator"
    }),
    new Game({
        title: "GBA",
        href: "/emulator/index.html?core=mgba",
        page: "gba",
        type: "emulator"
    }),
    new Game({
        title: "N64",
        href: "/emulator/index.html?core=mupen64plus_next",
        page: "n64",
        type: "emulator"
    }),
    new Game({
        title: "NES",
        href: "/emulator/index.html?core=nestopia",
        page: "nes",
        type: "emulator"
    }),
    new Game({
        title: "SNES",
        href: "/emulator/index.html?core=snes9x",
        page: "snes",
        type: "emulator"
    })
]

exports.getGames = async function getGames() {
    const htmlGamesDir = await readdir("./public/htmlgames");

    const htmlGames = htmlGamesDir.map(h =>
        new Game({
            page: h,
            type: "html"
        }));

    return [...emulators, ...htmlGames]
}
