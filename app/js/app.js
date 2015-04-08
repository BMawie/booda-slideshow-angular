'use strict';

var app = angular.module("boodaSlideshow", ["firebase", 'ngRoute']);

// this factory returns a synchronized array of slides
app.factory("Slides", 
  function($firebaseArray) {
    return function(userId) {
      var ref = new Firebase("https://boodalaunch.firebaseio.com/events/" + userId);
      // var query = ref.orderByChild("timestamp").limitToLast(25);
      // $firebaseArray(query);
      return $firebaseArray(ref);
    }
  }
);

app.controller('SlideListController', 
  function($scope, $routeParams, Slides) {
    
    $scope.userId = $routeParams['userId'];
    $scope.slides = Slides($scope.userId);
    console.log($scope.userId);
    
    $scope.slides.$loaded(function() {
      if ($scope.slides.length === 0) {
        // todo
        console.log('NO Slides to display');
      }
    });

    $scope.slides.$watch(function(event, key, prevChild) {
      // todo
      console.log('watch returned ' + event);
    });

  });

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/slides.html',
      controller: 'SlideListController'
    });
}]);
