# Smoot Marathon Pace Chart

A marathon pace chart that measures distance in kilosmoots (1 kSmoot = 1000 smoots = 1701.8 m).
A marathon is 24.79433541 kSmoots.

Built with [Astro](https://astro.build); deploys to GitHub Pages.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
```

## Deploying to GitHub Pages

1. Create a GitHub repo and push this code to the `main` branch.
2. Edit `astro.config.mjs` and set `site` (and `base` if deploying to a project page rather than a user page).
3. In the repo: **Settings → Pages → Source: GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

## Project layout

```
src/
  pages/index.astro      whole site (header, calculator, chart, footer)
  scripts/pace.js        time math (parseHMS, formatHMS, splitAt)
  styles/global.css      dark/white palette, layout, table chrome
```
