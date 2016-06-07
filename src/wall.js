
var tacowallComponent = {
	template: '<taco ng-repeat="ingredient in $ctrl.ingredients track by $index" salsa="ingredient.img"></taco>',
	bindings: {
		ingredients: '<'
	},
	controller: tacowallController
};

var tacoComponent = {
	template: '<img ng-src="{{ $ctrl.salsa }}">',
	bindings: {  salsa: '<' },
	controller: function () {}
};

function appController () {
	var vm = this;
	vm.listOfImages = [
		{'img':'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Nice/nice-overview-coastline-xlarge.jpg'},{'img':'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Nice/nice-overview-coastline-xlarge.jpg'},{'img':'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Nice/nice-overview-coastline-xlarge.jpg'},{'img':'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Nice/nice-overview-coastline-xlarge.jpg'}
	];
}
function tacowallController () {}

angular.module('tacowall')
	.controller('appController', appController)
	.component('tacowall', tacowallComponent)
	.component('taco', tacoComponent)
;
