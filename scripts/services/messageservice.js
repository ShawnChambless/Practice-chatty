'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($q, $http) {

        this.getMessages = function() {
            var dfd = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:5757'
            }).success(function(resp) {
                dfd.resolve(resp);
            })
            return dfd.promise;
        }

        this.addMessage = function(newMessage) {
            var dfd = $q.defer();
            $http({
                method: 'POST',
                url: 'http//localhost:5757',
                data: {
                    message: newMessage
                }
            }).success(function(resp) {
                dfd.resolve(resp)
            })
            return dfd.promise
        }
  });
