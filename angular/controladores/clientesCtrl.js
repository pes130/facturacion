var app = angular.module('facturacionApp.clientesCtrl',[]);

app.controller('clientesCtrl', ['$scope','Clientes', function($scope, Clientes){
  $scope.activar('mClientes','','Clientes', 'listado');
  $scope.clientes = {};
  Clientes.cargarPagina().then(function(){
    $scope.clientes = Clientes;
  });


}]);
