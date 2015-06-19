'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = MessageService.getMessages().then(function(resp) {
        $scope.messages = resp;
        console.log('GOT ' + resp)
    });

    $scope.addMessage = function() {
        MessageService.addMessage($scope.newMessage).then(function(resp) {
            $scope.messages = resp;
            $scope.newMessage = '';
            console.log('Added ' + resp)
        });
    };
  });
