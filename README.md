# Inconel

## Introduction

This is a simple, basic proxy that can be used to combat web filters

## Self hosting

Go to [surf.js](https://github.com/boomermath/inconel/blob/master/pages/surf.js#L20) and replace line 20 with the following:

```js
router.push(`/browse/${browse.toString()}`);
```

Optionally, `window.location.href` can be changed to link to another website's proxy, such as [Ultraviolet](https://github.com/titaniumnetwork-dev/ultraviolet-site)

Commands: `npm run build` and `npm start` and you're good to go!
