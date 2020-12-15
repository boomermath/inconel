# Inconel.ml
A stylish and sleek proxy website made using TitaniumNetwork's proxies!

## Deployment:
This website can be deployed on a static service (like Netlify/Vercel) or uploaded to web hosting!

## Development:
I am constantly trying to make my site better, so expect new commits!

## Setup:
This is just a frontend! The proxies are externally hosted! You have to attach your own proxies (or use my site https://inconel.ml) in js/surf.js (domain variables).

```javascript
var domainPY = [domain, prefix]; //Pydodge
var domainPHP = [domain, prefix]; //PHP proxy
var domainCNN = domain; //CNN proxy
var domainAL = [domain, prefix]; //Alloy proxy
```

Basically, if you go to js/surf.js, you will see this:
```javascript
//Pydodge Button
document.getElementById("pygo").onclick = function () {
  proxify(domainPY[0], domainPY[1], validURL(document.getElementById("url").value))
}

// PHP button
document.getElementById("php").onclick = function () {
  proxify(domainPHP[0], domainPHP[1], validURL(document.getElementById("url").value))
}

//Alloy Button
document.getElementById("al").onclick = function () {
  proxify(domainAL[0], domainAL[1], window.btoa(validURL(document.getElementById("url").value)))
}
```
What you want to do, if you want to attach a different proxy, is to change the domain variable, and if its NOT CNN proxy, you want to first add the domain, and then the prefix that goes on the end.

For example, if your domain was `https://myproxy.com/course/https://proxiedurl.com`, you would input your domain like so:

```javascript
var domainPY = ["myproxy.com","course"];
/*
Please note that it doesn't matter whether you add 
slashes '/' or 'https://'. For CNN proxy, you just input 
it like so:
*/
var domainCNN = "thisisCNN.com"
// The proxy will take care of any concentation needed.
```

You can change the button IDs in surf.html, and the surf.js can be referenced for your own fork, in order to input your own proxies!

## Chat/Forum
Go to forum pages, and if you want to hook up your own chat or forum, change the iframe source to your forum/chat!

## Credits:
TitaniumNetwork - for developing these amazing proxies!

VantaJS - for the super-cool background!

Simon Cheng - The guy who made CNN proxy (I use his website for my proxy)

Github: https://github.com/binary-person
