"use strict";

var user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Buillaume',
  lastName: 'Ialva',
  location: 'Telaviv',
  occupation: 'Engineer'
};

function logWelcomeUser(welcomeString) {
  console.log("".concat(welcomeString, " ").concat(user.firstName, ". Your occupation is: ").concat(user.occupation));
}

var bindLogWelcomeUser = logWelcomeUser.bind(user);
console.log(bindLogWelcomeUser('Hello'));