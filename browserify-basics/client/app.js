(function () {
	'use strict';
	
	var angular = require('angular');

	angular.module('simple.app', [
		require('angular-route'),
		require('angular-animate'),
		require('ng-fx')
	]);

	require('./controllers/example.controller');

})();