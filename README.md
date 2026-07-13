# yizhang.io

Personal website of Yi Zhang. Plain HTML/CSS/JS — no framework, no build step.

## Layout

- `site/` — everything that gets deployed (HTML, CSS, JS, assets, CNAME)
- `site/js/publications.js` — the publication list; edit this array to add papers

## Preview locally

```sh
npm start        # python3 -m http.server 8000 -d site
```

## Deploy

Publishes `site/` to the `gh-pages` branch, which GitHub Pages serves at https://yizhang.io.

```sh
npm run deploy   # npx gh-pages -d site --dotfiles
```

`site/CNAME` must always be present or GitHub drops the custom domain.
