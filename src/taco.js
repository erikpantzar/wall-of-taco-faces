
var tacoComponent = {
	template: '<img ng-src="{{ $ctrl.salsa }}">',
	bindings: {  salsa: '<' },
	controller: function () {}
};

angular.module('tacowall')
	.component('taco', tacoComponent)
;
