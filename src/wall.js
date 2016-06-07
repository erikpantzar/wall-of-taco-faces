
var tacowallComponent = {
	template: '<taco ng-repeat="ingredient in $ctrl.ingredients track by $index" salsa="ingredient.img"></taco>',
	bindings: {
		ingredients: '<',
		amount: '<',
		intervall: '<'
	},
	controller: tacowallController
};

function tacowallController () {
	var ctrl = this;
}

angular.module('tacowall')
	.component('tacowall', tacowallComponent)
;
