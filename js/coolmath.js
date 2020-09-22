function coolmath() {
    var yeet = document.getElementById("url").value;   
  var uhoh = yeet.includes("coolmathgames.com");
   var noni = yeet.includes("http://");
  var trol = yeet.includes("https://");
  var yai = yeet + "/play";
  var yaiy = "https://" + yai
  if (uhoh !== true) {alert("That's not a coolmath game link!");}
  else if (noni || trol) {window.open(yai);}
  else {window.open(yaiy);}}
     