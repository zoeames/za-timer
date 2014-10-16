(function(){
  'use strict';

  angular.module('za-timer')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.clock=120;
    var timer;

    function reduceTime(){
      $scope.clock -= 1;

      if($scope.clock <= 0){
        navigator.vibrate(3000);
        $interval.cancel(timer);
      }
    }

    $scope.start = function(){
      timer = $interval(reduceTime, 1000);
    };
  }]);
})();
