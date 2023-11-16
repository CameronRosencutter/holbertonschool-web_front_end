"use strict";

var roomDimensions = {
  width: 50,
  length: 100,
  getArea: function getArea() {
    return this.length * this.width;
  }
};
var boundGetArea = roomDimensions.getArea.bind(roomDimensions);
console.log(boundGetArea());