//app.js
var euler1 = angular.module('euler1', []);

euler1.controller("divisible_by_3_or_5", divisible_by_3_or_5);

function divisible_by_3_or_5($scope) {
    $scope.max;
    $scope.sum = 0;
    var i;
    $scope.findNum = function() {
        for (i = 0; i < $scope.max; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                $scope.sum += i;
            }
        }
    }
    //console.log('Sum of numbers is %d', sum);

}