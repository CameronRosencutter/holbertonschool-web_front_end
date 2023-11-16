"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// students Hogwarts
var studentHogwarts =
/*#__PURE__*/
function () {
  function studentHogwarts() {
    var privateScore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, studentHogwarts);

    this.privateScore = privateScore;
    this.name = name;
  }

  _createClass(studentHogwarts, [{
    key: "changeScoreBy",
    value: function changeScoreBy(points) {
      this.privateScore += points;
    }
  }, {
    key: "setName",
    value: function setName(newName) {
      this.name = newName;
    }
  }, {
    key: "rewardStudent",
    value: function rewardStudent() {
      this.changeScoreBy(1);
    }
  }, {
    key: "penalizeStudent",
    value: function penalizeStudent() {
      this.changeScoreBy(-1);
    }
  }, {
    key: "getScore",
    value: function getScore() {
      return "".concat(this.name, ": ").concat(this.privateScore);
    }
  }]);

  return studentHogwarts;
}();

var harry = new studentHogwarts(0, 'Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());
var draco = new studentHogwarts(0, 'Draco');
draco.rewardStudent(1);
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());