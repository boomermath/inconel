var domainPY = ["snakepython.herokuapp.com", "course"];
var domainPHP = ["boomermathphp.000webhostapp.com", "/geographic/index.php?q="];
var domainCNN = "thecnnpower.tk";
var domainAL = ["manynode.herokuapp.com", "proxy"];
var tabUS = "https://yewtu.be/feed/trending";

//Take the inputted url and make it an iframe.
function iframe(url) { return document.write('<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" id="proxyframe" src="' + url + '"  style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:9;"seamless>'); }

// Check if its a valid url, if not, forward it as a search query to google.
function is_url(str) {
  regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) { return false; }
  else {
    var url = document.getElementById("url").value;
    var googleurl = `https://${domainPHP[0]}${domainPHP[1]}https://google.com/search?q=${encodeURIComponent(url)}`;
    iframe(googleurl);
    return true;
  }
}

//If the URL doesn't have https://, add it.
function validURL(inputtedUrl) {
  inputtedUrl.substr(0, 4) === "http" ? inputtedUrl : inputtedUrl = `https://${inputtedUrl}`
  return inputtedUrl;
}

//Create the iframe source using the proxy's domain, suffix, and the inputted URL, so to hide search history, and proxy websites.
function proxify(domain, suffix, url) {
  domain.substr(0, 4) === "http" ? domain : domain = `https://${domain}`;
  if (!suffix.startsWith('/') || !suffix.endsWith('/') && !suffix.endsWith('=')) suffix = `/${suffix}/`
  var iframeSrc = domain + suffix + url;
  iframe(iframeSrc)
}

// Pygo button

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

//CNN Button
document.getElementById("cnn").onclick = function cnn() {
  var url = document.getElementById("url").value;
  if (is_url(url)) return;
  if (url.substr(0, 4) === "http") url = url.replace(/(^http:\/\/)|(^https:\/\/)/g, '');
  alert(url)
  url = url.split('/');
  url[0] = url[0].replace(/\-/g, '_-').replace(/\./g, '--');
  let append = url.slice(1).join('/')
  var formattedURL = `https://s--${url[0]}.${domainCNN}/${append ? append : ''}`
  alert(formattedURL)
  iframe(formattedURL);
};

window.onload = function () {
  document.getElementById("url").focus();
};
