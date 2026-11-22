// Star Catcher — tiny static server (Node 22+, no dependencies).
// Serves index.html from this file's directory on PORT (default 8080).
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 8080);

const server = createServer(async (req, res) => {
  try {
    if (req.url === "/" || req.url === "/index.html") {
      const html = await readFile(join(__dirname, "index.html"), "utf8");
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      res.end(html);
    } else {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("Not found\n");
    }
  } catch (err) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("Server error\n");
  }
});

server.listen(PORT, () => {
  console.log(`Star Catcher running at http://localhost:${PORT}`);
});
