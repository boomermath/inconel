const { createServer } = require("http");
const Corrosion = require("corrosion");
const next = require("next");

const corrosion = new Corrosion({
    codec: "plain",
    prefix: "/browse/"
});

const app = next({ dev: process.env.NODE_ENV === "development" });

const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    
    const server = createServer();

    server.on("request", (req, res) => {
        if (req.url.startsWith("/browse")) {
            corrosion.request(req, res);
        } else {
            handle(req, res);
        }
    });

    server.on("upgrade", corrosion.upgrade);

    server.listen(process.env.PORT, (err) => {
        if (err) throw err;
        console.log("Ready on port " + process.env.PORT);
    })
})();