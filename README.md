# Inconel

## Introduction

This is a simple, basic proxy that can be used to combat web filters

## Self hosting

Go to [surf.js](https://github.com/boomermath/InconelNext/blob/master/pages/surf.js#L20) and replace line 20 with the following:

```js
router.push(`/browse/${browse.toString()}`);
```

then `npm run build` and `npm start` and you're good to go!
