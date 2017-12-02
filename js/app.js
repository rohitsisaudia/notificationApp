angular.module('myApp', ['ngWebSocket']).component('notificationComponent', {
    templateUrl : "notification_template.html",
    controller : function NotificationController($scope, myData){
        $scope.today = new Date();
        $scope.myNotifications = myData;
    }
})
.factory('myData', function($websocket) {
      var dataStream = $websocket('ws://127.0.0.1:1337/');

      var collection = [];

      dataStream.onMessage(function(message) {
        collection.push(JSON.parse(message.data));
      });

      
      return collection;
      //return methods;
    })


    .controller("mainController", function($scope){
        $scope.showNotifications = false;
        $scope.toggleNotifications = function(){
          $scope.showNotifications = !$scope.showNotifications;
      }

    });
