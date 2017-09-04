var app = angular.module('target', ['ngMask', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'views/lista.html',
            controller: 'ListaCtrl',
            controllerAs: 'lista'
        })
        .when('/cadastro/novo', {
            templateUrl: 'views/cadastro.html',
            controller: 'CadastroCtrl',
            controllerAs: 'cadastro'
        })
        .when('/cadastro/editar/:id', {
            templateUrl: 'views/cadastro.html',
            controller: 'CadastroCtrl',
            controllerAs: 'cadastro'
        })
        .when('/lista', {
            redirectTo: '/'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);