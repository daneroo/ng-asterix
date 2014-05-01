angular.module('asterix').factory('mockdb', function($http) {
  'use strict';

  var perso = [];
  var promise = $http.get('/data/personnages.json')
    .success(function(data, status, headers, config) {
      perso = data;
      // this callback will be called asynchronously
      // when the response is available
    })
    .error(function(data, status, headers, config) {
      console.log('not loaded');
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

  var mockdb = {
    promise: promise,
    getPerso: function() {
      return perso;
    }
  };

  return mockdb;
});