import { defineConfig } from 'astro/config';

// For GitHub Pages:
//   - User/org page (username.github.io): leave `base` unset, set `site` to 'https://username.github.io'
//   - Project page (username.github.io/repo-name): set `base: '/repo-name/'` and `site: 'https://username.github.io'`
export default defineConfig({
  site: 'https://octocog.github.io',
  base: '/smoot-pace/',
});
