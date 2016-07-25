var app = angular.module('facturacionApp.mensajes',[]);

app.factory('Mensajes', ['$http','$q', function($http,$q) {
  var self = {
    mensajes: [{
      img: 'dist/img/user2-160x160.jpg',
      nombre: 'Chapulín colorado',
      mensaje: 'Bienvenido a nuestro servicio de facturación',
      fecha: '5-marzo'
    },
    {
      img: 'dist/img/user2-160x160.jpg',
      nombre: 'María Soto',
      mensaje: 'Bienvenido a nuestro servicio de facturación',
      fecha: '15-Abril'
    },
    {
      img: 'dist/img/user2-160x160.jpg',
      nombre: 'Victor Martinez',
      mensaje: 'Bienvenido a nuestro servicio de facturación',
      fecha: '8-marzo'
    }]
  };
  return self;
}]);
