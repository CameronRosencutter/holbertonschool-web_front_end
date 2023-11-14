"use strict";

function welcome(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;

  function displayFullName() {
    window.alert('Welcome ' + fullName + '!');
  }

  displayFullName();
}