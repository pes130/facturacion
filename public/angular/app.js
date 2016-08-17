var app = angular.module('loginApp',['login.loginService']);

app.controller('mainCtrl',['$scope','LoginService', function($scope, LoginService){


    $scope.invalido = false;
    $scope.cargando = false;
    $scope.mensaje = '';

    $scope.datos =  {};
    $scope.ingresar = function(datos){
      $scope.invalido = false;
      $scope.cargando = true;
      LoginService.login(datos).then(function(data){
          if(data.err){
            $scope.invalido = true;
            $scope.cargando = false;
            $scope.mensaje = data.mensaje;
          } else {
            console.log("Login válido");
            window.location = data.url;

          }
      });

      console.log(datos);
    }


}]);
