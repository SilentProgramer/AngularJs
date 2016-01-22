app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'Top Sellers of Books';
    $scope.promo = 'Promotional Offers';
    
    $scope.products = [
        {
            name: 'The Book of Trees',
            price: 19,
            pubdate: new Date('2014', '03', '08'),
            cover: '/img/the-book-of-trees.jpg',
            likes: 0,
            dislikes:0
        },
        {
            name: 'Harry Potter and the Order of the Phoenix',
            price: 17.99,
            pubdate: new Date('2009', '07', '28'),
            cover: '/img/order-of-the-phoenix.jpg',
            likes: 0,
            dislikes: 0
        },
         {
             name: 'Program or be Programmed',
             price: 8,
             pubdate: new Date('2013', '08', '01'),
             cover: '/img/program-or-be-programmed.jpg',
             likes: 0,
             dislikes: 0
         },
        {
            name: 'Harry Potter and the Deathly Hallows',
            price: 21.99,
            pubdate: new Date('2011', '09', '18'),
            cover: '/img/deathly-hallows.jpg',
            likes: 0,
            dislikes: 0
        }
    ];

    $scope.plusOne= function(index){
        $scope.products[index].likes++;
    }

    $scope.minusOne = function (index) {
        $scope.products[index].dislikes++;
    }
}]);