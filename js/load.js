var load = window.setInterval(function () {
  var wait = document.getElementById("wait");
  if (wait.innerHTML.length > 2) wait.innerHTML = "";
  else wait.innerHTML += ".";
}, 400);
