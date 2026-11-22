# ⭐ Star Catcher

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/cervus-snoopy/crimson-star-catcher-3k8p/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/cervus-snoopy/crimson-star-catcher-3k8p/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

A tiny neon arcade browser game built from a single prompt for the [make.fun bounty](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709): *"Build a tiny browser game in a single HTML file: 'Star Catcher'..."*

Move a glowing basket to catch falling stars before they hit the ground. No external dependencies, no sound — just one HTML file and a tiny Node server.

## How to play

- **Move:** ← → arrow keys (or A / D) or move your mouse
- **⭐ Star:** +10 points
- **🌟 Golden star:** +50 points (rare, ~15% of spawns)
- **Miss a star:** lose 1 life — you have 3
- **Timer:** 60 seconds — survive the full minute or run out of lives
- **Game over:** shows your final score with a **Play Again** button

Stars fall faster as the timer runs down. Catch them in the basket, watch the neon particle bursts, and chase the high score.

## Run it

Requires Node.js 22+ (no dependencies to install):

```bash
node main.ts
```

Then open http://localhost:8080 in your browser.

To use a different port:

```bash
PORT=3000 node main.ts
```

Or just open `index.html` directly in a browser — the game is a single self-contained file.

## Files

- `index.html` — the whole game (canvas, neon style, 198 lines)
- `main.ts` — tiny static server (Node `http` only)
- `LICENSE` — MIT

## License

MIT — see [LICENSE](LICENSE).
