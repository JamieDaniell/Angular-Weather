//CONTROLLERS
weatherApp.controller('homeController', function($scope, $location, cityService)
{
    $scope.city = cityService.city;
    $scope.$watch('city' ,function()
    {
        cityService.city = $scope.city;
    })

    $scope.submit = function(){
        $location.path("/forecast");
    };
});

weatherApp.controller('forecastController', function($scope , $resource, $routeParams, $sce ,cityService)
{
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", 
        {get: {method: "JSONP"}});
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days , appid: "e3a6d6e63f2e52d0ac380e8575296d4d" });

    $scope.convertToCelsius = function(degK)
    {
        return Math.round(degK - 273.15);
    }

    $scope.convertToDate = function(dt)
    {
        return new Date(dt*1000);
    }
});