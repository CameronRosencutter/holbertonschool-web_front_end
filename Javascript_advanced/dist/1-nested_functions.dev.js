"use strict";

var globalVariable = "Welcome";

function outer() {
  alert(globalVariable);
  course = "Holberton";

  function inner() {
    alert(globalVariable + ' ' + course);
    var exclamation = "!";

    function inception() {
      alert(globalVariable + ' ' + course + ' ' + exclamation);
    }

    inception();
  }

  inner();
}

outer();