//Scope Inheritance:
//It is common to attach Controllers at different levels of the DOM hierarchy. Since the ng-controller directive creates a new child scope, 
//we get a hierarchy of scopes that inherit from each other. The $scope that each Controller receives will have access to properties and methods 
//defined by Controllers higher up the hierarchy.

var myApp = angular.module('scopeInheritance', []);

myApp.controller('MainController', ['$scope', function ($scope) {
    $scope.timeOfDay = 'morning';
    $scope.name = 'Nikki';
}]);

myApp.controller('ChildController', ['$scope', function ($scope) {
    $scope.name = 'Mattie';
}]);

myApp.controller('GrandChildController', ['$scope', function ($scope) {
    $scope.timeOfDay = 'evening';
    $scope.name = 'Gingerbread Baby';
}]);
