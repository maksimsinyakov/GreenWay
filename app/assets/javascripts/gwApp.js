var module = angular.module('gwApp', ['ui.bootstrap', 'ui.map', 'ngRoute']);

module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main.html',
            controller: 'MainCtrl'
        })
        .when('/routes', {
            templateUrl: '/partials/routes/list.html',
            controller: 'RouteListCtrl'
        })
        .when('/route/new', {
            templateUrl: '/partials/routes/new.html',
            controller: 'NewRouteCtrl'
        })
        .when('/route/:routeId', {
            templateUrl: '/partials/routes/route.html',
            controller: 'RouteCtrl'
        })
        .when('/routes', {
            templateUrl: '/partials/routes/list.html',
            controller: 'RouteListCtrl'
        })
        .when('/register', {
            templateUrl: '/partials/register.html',
            controller: 'RegisterCtrl'
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
        },
        setData: function(url, data, fn) {
            return $http({
                url: url,
                method: "POST",
                data: data,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                console.log(data, status)
            }).error(function (data, status, headers, config) {
                console.log(data, status)
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
    $scope.currentRoute = 1;
    $scope.setCurrentRoute = function (index) {
        $scope.currentRoute = index;
    };
    $scope.showRoute = function (routeId) {
        $location.path('/route/' + routeId);
    };
});

module.controller('RouteCtrl', function ($scope, $routeParams, appStore) {
    var id = $routeParams.routeId;

    appStore.getData('/routes/' + id).then(function (response) {
        $scope.radioStatus = 'all';
        $scope.moves = JSON.parse(response.moves);
        $scope.route = response.route;
    });

});

module.controller('NewRouteCtrl', function ($scope, appStore) {
    $scope.submitForm = function () {
        var data = JSON.stringify({
            name: $scope.name,
            fare: $scope.fare,
            coord: $scope.coord
        });

        appStore.setData('routes', data);
    };

    $scope.mapOptions = {
        center: new google.maps.LatLng(50.4500, 30.5233),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.coord = "";
    $scope.myMarkers = [];
    $scope.addMarker = function ($event, $params) {
        $scope.myMarkers.push(new google.maps.Marker({
            map: $scope.myMap,
            position: $params[0].latLng
        }));
        if ($scope.coord) $scope.coord += "|";
        $scope.coord += $params[0].latLng.k + ',' + $params[0].latLng.A;
    };
    $scope.openMarkerInfo = function (marker) {
        $scope.currentMarker = marker;
        var lat = marker.getPosition().lat(),
            lng = marker.getPosition().lng();
    };
    $scope.setMarkerPosition = function (marker, lat, lng) {
        marker.setPosition(new google.maps.LatLng(lat, lng));
    };
});

// register
module.controller('RegisterCtrl', function ($scope, $routeParams, appStore) {
    // todo registration handling
});

module.filter('byStatus', function() {
    return function(input, status) {
        if (input) {
            if (status === 'all') {
                return input;
            }
            return input.filter(function (item) {
                return item.status === status;
            });
        }
        return false;
    }
});