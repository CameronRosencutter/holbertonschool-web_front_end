"use strict";

function changeMode(size, weight, transform, background, color) {
  document.body.style.fontSize = size + 'px';
  document.body.style.fontWeight = weight;
  document.body.style.textTransform = transform;
  document.body.style.background = background;
  document.body.style.color = color;
}

function main() {
  var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
}