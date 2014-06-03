var module = angular.module('gwApp', ['ui.bootstrap', 'ngRoute']);

module.config(['$routeProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main.html',
            controller: 'MainCtrl'
        })
        .when('/routes', {
            templateUrl: '/partials/routes/list.html',
            controller: 'RouteListCtrl'
        })
        .when('/route/:routeId', {
            templateUrl: '/partials/routes/route.html',
            controller: 'RouteCtrl'
        })
        .when('/users', {
            templateUrl: '/partials/users/list.html',
            controller: 'UserListCtrl'
        })
        .when('/user/:userId', {
            templateUrl: '/partials/users/user.html',
            controller: 'UserCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

module.factory('appStore', function($http) {
    return {
        getData: function(url) {
            return $http.get(url).
                then(function(result) {
                    return result.data;
                });
        }
    }
});

module.directive("mainPage", function () {
    return {
        templateUrl: '/assets/tpl/main.html'
    };
});

// main page
module.controller('MainCtrl', function ($scope) {

});

// routes
module.controller('RouteListCtrl', function ($scope, $location, appStore) {
    appStore.getData('/routes').then(function (response) {
        $scope.routes = response;
    });

    $scope.test = function (routeId) {
        $location.path('/route/' + routeId);
    }
});

module.controller('RouteCtrl', function ($scope, $routeParams) {
    $scope.id = $routeParams.routeId;
});

// users
module.controller('UserListCtrl', function ($scope, $location, appStore) {
    appStore.getData('/users').then(function (response) {
        $scope.users = response;
    });

    $scope.test = function (userId) {
        $location.path('/user/' + userId);
    }
});

module.controller('UserCtrl', function ($scope, $routeParams) {
    $scope.id = $routeParams.userId;
});