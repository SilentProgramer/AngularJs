app.factory('photos', ['$http', function ($http) {
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
    .success(function (data) {
        return data;
    })
    .error(function (data) {
        return data;
    });



    //if your internet connection is not working, you can use the json file and images inside the "offline" folder 
    //and host it on a service on a local server using nodejs or asp.net
    //In the json file, make sure to change the icon property's value to the url of the image on the hosted local server

}]);