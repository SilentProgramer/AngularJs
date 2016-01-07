var myApp = angular.module('myApp', []);

myApp.controller('GreetingsController',['$scope',function($scope){
    $scope.greeting = "Hola!";
}]);
