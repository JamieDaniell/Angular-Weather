//ROUTES
weatherApp.config(function($routeProvider,$sceDelegateProvider)
{
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast',{
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    .when('/forecast/:days',{
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    });
    $sceDelegateProvider.resourceUrlWhitelist(['self','http://api.openweathermap.org/data/2.5/forecast/daily']);
})