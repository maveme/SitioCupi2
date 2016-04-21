/**
 * Created by Mauricio on 4/4/16.
 */

var sitioCupi2 = angular.module('sitioCupi2', ['ui.router']);

sitioCupi2.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/descripcion');

    $stateProvider
        .state('app',{
            url:'/',
            views: {
                'header': {
                    templateUrl: 'template/partials/header.html'
                },
                'content':{
                    templateUrl: 'views/descripcion/descripcion.html'
                }
            }
        })
        .state('app.descripcion',{
            url:'descripcion',
            views: {
                'content@':{
                    templateUrl: 'views/descripcion/descripcion.html'
                }
            }
        })
        .state('app.documentos',{
            url:'documentos',
            views: {
                'content@':{
                    templateUrl: 'views/documentos/documentos.html'
                }
            }
        })
        .state('app.guia-demo',{
            url:'guia-demo',
            views: {
                'content@':{
                    templateUrl: 'views/guia-demo/guia-demo.html'
                }
            }
        })
        .state('app.codigo',{
            url:'codigo',
            views: {
                'content@':{
                    templateUrl: 'views/codigo/codigo.html'
                }
            }
        })
        .state('app.modelos',{
            url:'modelos',
            views: {
                'content@':{
                    templateUrl: 'views/documentos/modelos.html'
                }
            }
        })
        .state('app.requerimientos-funcionales',{
            url:'/requerimientos-funcionales',
            views: {
                'content@':{
                    templateUrl: 'assets/specs/RequerimientosFuncionales.html'
                }
            }
        })
        .state('app.requerimientos-no-funcionales',{
            url:'/requerimientos-no-funcionales',
            views: {
                'content@':{
                    templateUrl: 'views/documentos/requerimientos-no-funcionales.html'
                }
            }
        })
        .state('app.consideraciones',{
            url:'/consideraciones',
            views: {
                'content@':{
                    templateUrl: 'views/documentos/consideraciones.html'
                }
            }
        })
        .state('app.documentos.modelos.diagrama-mundo',{
            url:'/diagrama-mundo',
            views: {
                'detail@app.documentos.modelos':{
                    templateUrl: 'views/documentos/diagrama-mundo.html'
                }
            }
        })
        .state('app.documentos.modelos.diagrama-interfaz',{
            url:'/diagrama-interfaz',
            views: {
                'detail@app.documentos.modelos':{
                    templateUrl: 'views/documentos/diagrama-interfaz.html'
                }
            }
        })
        .state('app.documentos.modelos.diagrama-pruebos',{
            url:'/diagrama-pruebas',
            views: {
                'detail@app.documentos.modelos':{
                    templateUrl: 'views/documentos/diagrama-pruebas.html'
                }
            }
        })
}]);