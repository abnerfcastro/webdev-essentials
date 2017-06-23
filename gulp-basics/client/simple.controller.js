(function() {
    'use strict'

    angular.module('app.core')
        .controller('SimpleController', ['$scope', '$log', function ($scope, $log) {
            $scope.title = "This is a title.";
            $scope.description = "This is a description.";            
        }]);
    
})();