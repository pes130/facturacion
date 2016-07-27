var app = angular.module('facturacionApp.clientesCtrl',[]);

app.controller('clientesCtrl', ['$scope','$routeParams','Clientes', function($scope, $routeParams, Clientes){
  $scope.activar('mClientes','','Clientes', 'listado');
  $scope.clientes = {};


  $scope.moverA = function(pag) {

    Clientes.cargarPagina(pag).then(function(){
      $scope.clientes = Clientes;
    });
  }

  $scope.moverA(1);
}]);
