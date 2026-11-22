# The World in One Day — Sunday 22 November 2026

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![make.fun · rank](https://make.fun/badge/news-image-20261122/Abdududu/news-image-20261122-v2/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![make.fun · reward](https://make.fun/badge/news-image-20261122/Abdududu/news-image-20261122-v2/reward.svg)](https://make.fun/bounty/news-image-20261122)

One image that sums up Sunday 22 November 2026's world news: **35 stories across 7 regions**, drawn denser than a standard digest.

## What is on the page

- **3 hero cards** on the stories dominating today's news cycle: COP31 closing in on a deal on day 14 in Antalya, Iran's Guards claiming hits on two US bases in Bahrain, and Peru counting the cost of its 6.7 quake.
- **A 6-number stats strip** built only from the hottest stories: 14 (COP31 day), 2 (US bases hit in Bahrain), 6.7 (Peru quake), 400 (drones in Russia's barrage), 11 (killed in the Sinaloa raid), $60,200 (Bitcoin back above $60K).
- **14 illustrated cards** — 3 large heroes plus 11 smaller cards, each with its own SVG illustration or glyph, so almost no block of the page is plain text.
- **3 mini data charts**, drawn as SVG: a COP31 fourteen-day timeline, Bitcoin's November slide ($77,435 → $80,405 peak → $58,799 low → $60,055), and the weekend's shakers (Panama 7.7, Timor-Leste 6.8, Peru 6.7, Myanmar 4.1).
- **A world map with 13 numbered pins**, a 21-story "ALSO ON" list, and a **DATE CHECK** box that honestly lists what was left out and why.

## How it was built

Every story is a real event dated Sunday 22 November 2026 (or a continuing story with a genuine 22 November development), every figure checked against Reuters, AP, AFP, USGS, IGP, INDECI, Formula 1, and CoinGecko. All illustrations are SVG shapes drawn in code — no external images.

The graded program (`main.ts`) is pure Node: it validates the pre-built `assets/news.png` (PNG signature, ≤ 1 MiB, ≤ 1024×1024) and copies it to the output directory as `entry.png` with a `manifest.json`. Playwright rendering lives only in the dev-time script `scripts/render.mjs`.

## Bounty

[Sum up 22 November's world news in one image](https://make.fun/bounty/news-image-20261122) — $100, paid to the top 50 entries. Entries close 24 November 2026, 00:00 UTC.
