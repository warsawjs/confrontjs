# 2019.confrontjs.com

[![07 December 2019](https://img.shields.io/badge/conference-07%20December%202019-%2523a64ac9.svg)](https://www.confrontjs.com)

## Development

```bash
npm install
npm run dev
# open localhost:3000
```

## Deployment
Uses heroku.
Staging: https://confrontjs-2019.herokuapp.com/

```bash
npm version patch # when deploy patch (small update) or a bugfix
# npm version minor # when deploy new feature
npm run deploy
```

## Testing

```bash
npm install -g cypress
npm run dev
npm test
```

