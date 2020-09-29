function coolmath() {
  var link = document.getElementById("url").value;
  var check = link.includes("coolmathgames.com");
  var http = link.includes("http://");
  var https = link.includes("https://");
  var hack = link + "/play";
  var nohttp = "https://" + hack;
  if (check !== true) {
    alert("That's not a coolmath game link!");
  } else if (http || https) {
    window.open(hack);
  } else {
    window.open(nohttp);
  }
}
