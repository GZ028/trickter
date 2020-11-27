// ==UserScript==
// @name        Trickster
// @description Trickster
//@author       -----
// @namespace   https://online-filmek.me/
// @match        https*://*online-filmek.me/film/*
// @version     0.1
// ==/UserScript==
var input = document.createElement("input");
input.type = "button";
input.value = "Link!";
input.onclick = showAlert;
input.style = "top:0;right:0;position:absolute;z-index: 9999; color:red;border:none;background-color:red;color:white;font-size:241%;"
document.body.appendChild(input);

function showAlert() {

    var x = document.links.namedItem("megoszto_link").href;
  document.getElementById("megoszto_link").innerHTML = x;
window.open(x);
}
