var app = angular.module('patientRegistration', []);

//angular controller
app.controller('mainForm', function ($scope) {

    $scope.invalid_age = true;

    //validate age
    $scope.ageChange = function () {
        var age = parseInt($scope.age);
        if (age < 18) {
            $scope.invalid_age = true;
            $scope.invalidAgeMsg = "enter above 18";
        }
        else if (age > 100) {
            $scope.invalid_age = true;
            $scope.invalidAgeMsg = " enter below 100";
        }
        else {
            $scope.invalid_age = false;
        }
    };




    //check all fields are valid
    $scope.submitForm = function () {

        // check to make sure the form is completely valid
        if ($scope.registerForm.$valid) {

            if ($scope.invalid_age) {
                alert('form is not ready');
            }
            else {
                alert("Fields are properly inputted");
            }

        }
        else {
            alert('form is not ready');
        }

    };
    // restrict future date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("birthday").setAttribute("max", today);

});