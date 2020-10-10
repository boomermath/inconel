function $(id) {
  return document.getElementById(id);
}

var domainPY = "";
var domainPHP = "";
var domainCNN = "";
var domainAL = "";
var tabUS = "https://yewtu.be/feed/trending";

// Check if its a valid url, if not, forward it as a search query to google.
function is_url(str) {
  regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return;
  } else {
    var url = $("url").value;
    var googleurl =
      "https://" +
      domainPHP +
      "/geographic/index.php?q=https://google.com/search?q=" +
      url;

    document.write(
      '<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" id="proxyframe" src="' +
        googleurl +
        '"  style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:9;"seamless>'
    );
  }
}

var url = window.location.hostname;

// Pygo button
document.getElementById("pygo").onclick = function pygo() {
  var url = $("url").value;
  // this is the URL for the server
  is_url(url);
  var n = url.includes("https://");
  var y = url.includes("http://");
  if (n || y) {
    var x = "https://" + domainPY + "/course/" + url;
  } else {
    var x = "https://" + domainPY + "/course/" + "http://" + url;
  }
  document.write(
    '<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" id="proxyframe" src="' +
      x +
      '"  style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:9;"seamless>'
  );

  return false;
};

// PHP button
document.getElementById("php").onclick = function php() {
  var url = $("url").value;
  // this is the URL for the server
  is_url(url);
  var n = url.includes("https://");
  var y = url.includes("http://");
  var youtube = url.includes("youtube");
  if (youtube) {
    var gui = "https://" + domainPHP + "/geographic/index.php?q=" + tabUS;
  } else if (n || y) {
    var gui = "https://" + domainPHP + "/geographic/index.php?q=" + url;
  } else {
    var gui =
      "https://" + domainPHP + "/geographic/index.php?q=" + "http://" + url;
  }
  document.write(
    '<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" id="proxyframe" src="' +
      gui +
      '"  style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:9;"seamless>'
  );
  return false;
};

// CNN button
document.getElementById("cnn").onclick = function cnn() {
  var url = $("url").value;
  // this is the URL for the server
  is_url(url);
  var urlSUB1 = url.replaceAll("-", "_-");
  var urlSUB = urlSUB1.replaceAll(".", "--");
  var nerd2 = urlSUB.replace("https://", "");
  var nerd1 = urlSUB.replace("http://", "");
  var n = url.includes("https://");
  var y = url.includes("http://");
  if (n) {
    var f = "https://" + "s--" + nerd2 + "." + domainCNN;
  } else if (y) {
    var f = "https://" + "s--" + nerd1 + "." + domainCNN;
  } else {
    var f = "https://" + "s--" + urlSUB + "." + domainCNN;
  }
  document.write(
    '<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" id="forumframe" src="' +
      f +
      '"  style="position:fixed; top: 0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:9;"</iframe>'
  );

  return false;
};

// AL button
document.getElementById("al").onclick = function al() {
  var url = $("url").value;
  // this is the URL for the server
  is_url(url);
  var n = url.includes("https://");
  var y = url.includes("http://");
  if (n) {
    var finalUrl = window.btoa(url);
    var jjui = "https://" + domainAL + "/proxy/" + finalUrl;
  } else if (y) {
    var finalUrl = window.btoa(url);
    var jjui = "https://" + domainAL + "/proxy/" + finalUrl;
  } else {
    url = "http://" + url;
    var finalUrl = window.btoa(url);
    var jjui = "https://" + domainAL + "/proxy/" + finalUrl;
  }
  document.write(
    '<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" id="forumframe" src="' +
      jjui +
      '"  style="position:fixed; top: 0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:9;"</iframe>'
  );

  return false;
};

window.onload = function () {
  $("url").focus();
};
