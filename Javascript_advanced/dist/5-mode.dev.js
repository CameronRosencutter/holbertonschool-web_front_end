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
  var p = document.createElement('p');
  var text = document.createTextNode('Welcome Holberton!');
  p.appendChild(text);
  document.body.appendChild(p);

  function createBtn(btnName, id, mode) {
    var btn = document.createElement('button');
    btn.innerHTML = btnName;
    btn.id = id;
    document.body.appendChild(btn);
    document.getElementById(id).onclick = mode;
  }

  createBtn('Spooky', 'spookyId', spooky);
  createBtn('Dark Mode', 'darkModeId', darkMode);
  createBtn('Scream Mode', 'screamModeId', screamMode);
}

main();