var app = angular.module('app', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/people')
        .success(function(data) {
            $scope.people = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}
