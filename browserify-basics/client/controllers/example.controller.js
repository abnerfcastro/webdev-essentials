(function () {
	'use strict';

	var angular = require('angular');

	angular
		.module('simple.app')
		.controller('ExampleController', ['$log', function ($log) {
			var vm = this;
			vm.show = true;

			activate();

			////////////////

			function activate() {
				$log.log('Working!');
			}

		}]);
})();