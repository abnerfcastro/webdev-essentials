(function () {

    var app = angular.module('SimpleApp', []);

    var SimpleCtrl = function ($scope, $http) {
        console.log("Logging: Hello from SimpleCtrl.");

        $scope.data = '';

        var fetch = function () {
            console.log("Logging: fetch function.");
            $http.get('/data').success(function (response) {
                console.log("Logging: Got the requested data.");
                console.log(response);
                $scope.data = response;
            });
        }

        $scope.add = function () {
            console.log("Logging: add function.");
            $http.post('/data', $scope.contact)

                .success(function (response) {
                    console.log(response);
                    fetch();
                })

                .error(function (response) {
                    console.log(response);
                });
        }

        $scope.remove = function (id) {
            console.log("Logging: remove function.");
            $http.delete('/data/' + id)

                .success(function (response) {
                    console.log(response);
                    fetch();
                })

                .error(function (response) {
                    console.log(response);
                });
        }

        $scope.edit = function (id) {
            console.log("Logging: edit function.");
            $http.get('/data/' + id)

                .success(function (response) {
                    $scope.contact = response;
                })

                .error(function (response) {
                    console.log(response);
                });
        }

        $scope.update = function (id) {

        }

        // Initial fetch
        fetch();
    }

    app.controller('SimpleCtrl', SimpleCtrl);

})();