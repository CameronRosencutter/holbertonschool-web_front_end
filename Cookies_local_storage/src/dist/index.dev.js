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

function getCookie() {
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();

    if (cookie.indexOf(name + '=') === 0) {
      return cookie.substring(name.length + 1);
    }
  }

  return '';
}