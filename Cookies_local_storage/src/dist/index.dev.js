"use strict";

function setCookies() {
  var firstname = document.getElementById('firstname').value;
  var email = document.getElementById('email').value;
  document.cookie = 'firstname=' + encodeURIComponent(firstname);
  document.cookie = 'email=' + encodeURIComponent(email);
  alert('Welcome ' + firstname + ', have some cookies!');
}

function showCookies() {
  var paragraph = document.createElement('p');
  var cookieValue = document.cookie;
  paragraph.innerHTML = "".concat(cookieValue);
  document.body.appendChild(paragraph);
  alert('Cookies Aquired!');
}