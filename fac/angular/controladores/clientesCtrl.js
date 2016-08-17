var app = angular.module('facturacionApp.clientesCtrl',[]);

app.controller('clientesCtrl', ['$scope','$routeParams','Clientes', function($scope, $routeParams, Clientes){
  $scope.activar('mClientes','','Clientes', 'listado');
  $scope.clientes = {};
  $scope.clienteSel = {};


  $scope.moverA = function(pag) {

    Clientes.cargarPagina(pag).then(function(){
      $scope.clientes = Clientes;
    });
  }

  $scope.moverA(1);


  // Mostrar modal de edición
  $scope.mostrarModal = function(cliente){
    console.log(cliente);
    angular.copy(cliente, $scope.clienteSel);
    $("#modal_cliente").modal();

  }

  // FUnción para guardar
  $scope.guardar = function(cliente, frmCliente) {
    Clientes.guardar(cliente).then(function(){
      //codigo cuando se actualizo
      $("#modal_cliente").modal('hide');
      $scope.clienteSel = {};
      frmCliente.autoValidateFormOptions.resetForm();

    });
  }


}]);
