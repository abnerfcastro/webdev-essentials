(function() {

    var app = angular.module('SimpleApp', []);

    var SimpleCtrl = function($scope, $http) {
        console.log("Logging: Hello from SimpleCtrl.");

        $scope.data = '';

        var fetch = function() {
            console.log("Logging: requestData function.");
            $http.get('/data').success(function(response) {
                console.log("Logging: Got the requested data.");
                console.log(response);
                $scope.data = response;                
            });
        }

        $scope.add = function() {
            $http.post('/data', $scope.contact)
                
                .success(function(response) {
                    console.log(response);
                    fetch();
                })

                .error(function(response) {
                    console.log(response);
                });
        }

        // Initial fetch
        fetch();
    }

    app.controller('SimpleCtrl', SimpleCtrl);

})();