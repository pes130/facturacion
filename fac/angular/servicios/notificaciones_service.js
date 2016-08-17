var app = angular.module('facturacionApp.notificaciones',[]);

app.factory('Notificaciones', ['$http','$q', function($http,$q) {
  var self = {
    notificaciones: [{
      icono: 'fa-user',
      notificacion: 'Nuevo usuario registrado'
    },
    {
      icono: 'fa-save',
      notificacion: 'Se está utilizando el 50% de disco lorem ipsum dolom'
    }]
  };
  return self;
}]);
