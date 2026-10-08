<p align="center">
  <img src="public/assets/flip7-title-logo.png" width="300" alt="Flip7 Companion" />
</p>

<h1 align="center">Flip7 Companion</h1>

<p align="center">A one-device companion for playing <strong>Flip 7</strong> with a physical deck.</p>

## Modes

- **Banker Mode:** One person records cards for the whole table. Add and order 3–18 players, choose a target score from 50–500, switch between player tables, assign action cards, correct mistakes, and review round and final scores.
- **Demo Mode:** Practice card choices and scoring at a solo table.

The app never draws or shuffles cards. Both modes run in the current browser session. Player names, cards, scores, and history are cleared when you leave or refresh the game.

## Play a match

1. Open **Banker Mode** and enter the players' names and target score.
2. Use one device at the table. As each physical card is revealed, select the player's table and record the card.
3. Bank scores or record action cards as play proceeds. Use the card controls, Undo, or Redo to correct entries.
4. Review the summary when all players are settled, then start the next round. The game ends after a completed round reaches the target score.

Open **Demo Mode** to practice on your own. Its session is temporary too.

## Scoring

Number cards score their face value. A duplicate number busts the player unless Second Chance cancels it. The `0` card counts as a unique number but scores zero. Seven unique number cards earn a 15-point bonus.

| Card | Effect |
| --- | --- |
| ×2 | Doubles the number-card total. |
| +2, +4, +6, +8, +10 | Adds the printed points after ×2. |
| Second Chance | Cancels one duplicate number card. |
| Freeze | Banks an active player's score. |
| Flip Three | Makes an active player accept three cards, one at a time. |

The app adds active number cards, applies ×2, adds modifiers, then adds the Flip 7 bonus. A bust scores zero for the round.

## Pages

| Route | Purpose |
| --- | --- |
| `/` or `/landing` | Landing page and mode entry. |
| `/banker` | One-device Banker Mode. |
| `/demo` | Solo practice table. |
| `/rules` | Illustrated game rules and scoring reference. |
| `/faq` | Common questions about the app and cards. |
| `/privacy`, `/terms`, `/contact` | Informational pages. |

## Run locally

Requires Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Vite prints the local address, usually `http://localhost:5173`. No environment variables or external game service are required.

```bash
npm test
npm run build
```

The production build is in `dist/`. The app includes a web manifest and service worker for cached static assets after a visit.

## Project structure

- `src/game/` — card definitions and local game logic.
- `src/pages/game/` — Banker and Demo screens and shared card controls.
- `src/pages/` — landing and informational pages.
- `src/styles/` — shared layout and control styles.
- `public/cards/` — card artwork.

Flip7 Companion is an independent companion app and is not affiliated with or endorsed by the creators or publishers of Flip 7.
