(function() {

    var app = angular.module('SimpleApp', []);

    var SimpleCtrl = function($scope, $http) {
        console.log("Logging: Hello from SimpleCtrl.");

        $scope.data = '';

        $scope.requestData = function() {
            console.log("Logging: requestData function.");
            $http.get('/data').success(function(response) {
                console.log("Logging: Got the requested data.");
                console.log(response);
                $scope.data = response;                
            });
        }
    }

    app.controller('SimpleCtrl', SimpleCtrl);

})();