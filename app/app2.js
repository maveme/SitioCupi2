/**
 * Created by Mauricio on 3/31/16.
 */
var sitioCupi2 = angular.module('sitioCupi2', ['ngRoute']);

sitioCupi2.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/descripcion', {
            templateUrl: 'views/descripcion/descripcion.html',
            controller: 'descripcionController'
        }).
        when('/documentos', {
            templateUrl: 'views/documentos/documentos.html',
            controller: 'documentosController'
        }).
        when('/documentos/req', {
            templateUrl: 'views/documentos/RequerimientosFuncionales.html',
            controller: 'documentosController'
        }).
        when('/guia-demo', {
            templateUrl: 'views/guia-demo/guia-demo.html',
            controller: 'guiaController'
        }).
        when('/codigo', {
            templateUrl: 'views/codigo/codigo.html',
            controller: 'codigoController'
        }).
        otherwise({
            redirectTo: '/descripcion'
        });
    }]);


sitioCupi2.controller('descripcionController',function($scope){
    $scope.message = 'descripcion view';
});

sitioCupi2.controller('documentosController',function($scope){
    $scope.message = 'documentos view';
});

sitioCupi2.controller('guiaController',function($scope){
    $scope.message = 'guia view';
});

sitioCupi2.controller('codigoController',function($scope){
    $scope.message = 'codigo view';
});