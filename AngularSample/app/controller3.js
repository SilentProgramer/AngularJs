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



//if you need to test a nested controller you must create the same scope hierarchy in your test that exists in the DOM:

describe('state', function () {
    var mainScope, childScope, grandChildScope;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope, $controller) {
        mainScope = $rootScope.$new();
        $controller('MainController', { $scope: mainScope });
        childScope = mainScope.$new();
        $controller('ChildController', { $scope: childScope });
        grandChildScope = childScope.$new();
        $controller('GrandChildController', { $scope: grandChildScope });
    }));

    it('should have over and selected', function () {
        expect(mainScope.timeOfDay).toBe('morning');
        expect(mainScope.name).toBe('Nikki');
        expect(childScope.timeOfDay).toBe('morning');
        expect(childScope.name).toBe('Mattie');
        expect(grandChildScope.timeOfDay).toBe('evening');
        expect(grandChildScope.name).toBe('Gingerbread Baby');
    });
});