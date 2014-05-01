angular.module('asterix').factory('mockdb', function($http) {
  'use strict';

  var persos = [];
  var promise = $http.get('/data/personnages.json')
    .success(function(data, status, headers, config) {
      persos = data;
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
    getPersos: function() {
      return persos;
    },
    getPerso: function(id) {
      var found=null;
      persos.forEach(function(p){
        // console.log('p',p);
        if (id===p.personnageId){
          found=p;
        }
      });
      return found;
    }
  };

  return mockdb;
});