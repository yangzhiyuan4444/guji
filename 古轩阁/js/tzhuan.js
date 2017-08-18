var app=angular.module("myApp",["ngRoute"]);
			  app.controller("myCtrl",function($scope){
				
			})
			app.config(function($routeProvider){
				$routeProvider
				.when('/yi',{
					templateUrl:"html/one.html"
				})
				.when('/er',{
					templateUrl:"html/two.html"
				})
				.when('/san',{
					templateUrl:"html/three.html"
				})
				.when('/si',{
					templateUrl:"html/four.html"
				})	
				.otherwise({
					redirectTo:'/yi'
				})
			})		