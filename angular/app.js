var app = angular.module('facturacionApp',['ngRoute',
                'facturacionApp.configuracion',
                'facturacionApp.mensajes',
                'facturacionApp.notificaciones',
                'facturacionApp.clientesCtrl',
                'facturacionApp.dashboardCtrl',
                'facturacionApp.clientes']);

app.controller('mainCtrl',['$scope','Configuracion','Mensajes', 'Notificaciones', function($scope, Configuracion, Mensajes, Notificaciones){
  $scope.config = {};
  $scope.mensajes = Mensajes.mensajes;
  $scope.notificaciones = Notificaciones.notificaciones;
  $scope.titulo = "";
  $scope.subtitulo = "";
  console.log($scope.notificaciones);

  $scope.usuario = {
    "nombre": "Pablo"
  };
  Configuracion.cargar().then(function(){
    $scope.config = Configuracion.config;
  });


  //FUnciones globales
  $scope.activar = function(menu, submenu, titulo, subtitulo){
    $scope.mDashboard = "";
    $scope.mClientes = "";
    $scope[menu] = "active";
    $scope.titulo = titulo;
    $scope.subtitulo = subtitulo;
  };


}]);


// RUTAS
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl: 'dashboard/dashboard.html',
        controller: 'dashboardCtrl'
      })  .when('/clientes',{
          templateUrl: 'clientes/clientes.html',
          controller: 'clientesCtrl'
        }).
      otherwise({
        redirectTo: '/'
      })
}]);



//FILTROS
app.filter('quitarLetra', function(){
  return function(palabra){
    if(palabra != undefined && palabra.length > 1){
      return palabra.substring(1);
    } else {
      return palabra;
    }
  }
}).
filter('mensajeCorto', function(){
  return function(mensaje){
    if(mensaje != undefined && mensaje.length > 35){
      return mensaje.substring(0,35)+"...";
    } else {
      return mensaje;
    }
  }
})
