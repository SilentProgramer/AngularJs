app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'Top Sellers of Books';
    $scope.promo = 'Promotional Offers';

    $scope.product = {
        name: 'The Book of Trees',
        price: 19
    };

}]);