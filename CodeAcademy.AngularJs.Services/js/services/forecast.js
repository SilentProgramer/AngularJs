app.factory('forecast', ['$http', function ($http) {
    var url = 'https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json';
    return $http.get(url)
                .success(function (data) {
                    return data;
                })
                .error(function (err) {
                    return err;
                });

    //if your internet connection is not working, you can use the json file and images inside the "offline" folder 
    //and host it on a service on a local server using nodejs or asp.net
    //In the json file, make sure to change the icon property's value to the url of the image on the hosted local server


}]);