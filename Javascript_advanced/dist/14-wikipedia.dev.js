"use strict";

function createElement(data) {
  var p = document.createElement('p');
  var text = document.createTextNode(data);
  p.appendChild(text);
  document.body.appendChild(p);
}

function queryWikipedia(callback) {
  var request = new XMLHttpRequest();
  request.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
  request.send();

  request.onload = function () {
    return callback(JSON.parse(request.response).query.pages["21721040"].extract);
  };
}

queryWikipedia(createElement);