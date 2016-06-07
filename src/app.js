
function appController () {
	var vm = this;
	vm.listOfImages = [
		{'img':'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Nice/nice-overview-coastline-xlarge.jpg'},{'img':'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Nice/nice-overview-coastline-xlarge.jpg'},{'img':'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Nice/nice-overview-coastline-xlarge.jpg'},{'img':'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Nice/nice-overview-coastline-xlarge.jpg'}
	];
}

angular.module('tacowall', [])
	.controller('appController', appController)
;
