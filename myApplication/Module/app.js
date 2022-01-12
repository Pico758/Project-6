var app = angular.module('patientRegistration', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'form.html',
            controller: 'mainForm'
        });


}]);