function welcome (firstName, lastName){
	const fullName = firstName + ' ' + lastName
	function displayFullName () {
		window.alert('Welcome ' + fullName + '!')
	}
	displayFullName()
}
var displayFullName = {
    firstName: "Cameron",
    lastName: "Rosencutter",
};