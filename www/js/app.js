// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function () {
  var app = angular.module("starter", ["ionic"]);
  app.controller("TodoCtrl", function ($scope) {
    $scope.tasks = [
      { title: "Collect coins" },
      { title: "Eat mushrooms" },
      { title: "Get high enough to grab the flag" },
      { title: "Find the Princess" },
    ];

    $scope.todoTitle = "";

    $scope.addTask = function (todo) {
      console.log("add button clicked");
      console.log(todo);
      let task = { title: todo };
      $scope.tasks.push(task);
      console.log($scope.tasks);
    };
    //console.log($scope.todoTitle);
  });

  app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs).
      // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
      // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
      // useful especially with forms, though we would prefer giving the user a little more room
      // to interact with the app.
      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        // Set the statusbar to use the default style, tweak this to
        // remove the status bar on iOS or change it to use white instead of dark colors.
        StatusBar.styleDefault();
      }
    });
  });
})();
