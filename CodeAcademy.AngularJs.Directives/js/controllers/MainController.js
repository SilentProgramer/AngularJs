app.controller('MainController', ['$scope', function ($scope) {
    $scope.apps = [
    {
        icon: '/img/move.jpg',
        title: 'MOVE',
        developer: 'MOVE, Inc.',
        price: 0.99
    },
    {
        icon: '/img/shutterbugg.jpg',
        title: 'Shutterbugg',
        developer: 'Chico Dusty',
        price: 2.99
    },

    {
        icon: '/img/gameboard.jpg',
        title: 'Gameboard',
        developer: 'Armando P.',
        price: 1.99
    },

    {
        icon: '/img/forecast.jpg',
        title: 'Forecast',
        developer: 'Forecast',
        price: 1.99
    },
    {
            icon: '/img/github.jpg',
            title: 'GitHub',
            developer: 'Github',
            price: 2.99
    },

    {
        icon: '/img/pinterest.jpg',
        title: 'Pinterest',
        developer: 'Pinterest',
        price: 0.99
    }

    ]
}]);