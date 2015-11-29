angular
	  	.module("synechronModule")
	  	.controller("synechronController", function($scope,dynamicFactory){
	  		dynamicFactory.hd.success(function(response, status, xmlhttprequest){
	  			$scope.heros = response;
	  			//console.log(response);
	  			//console.log("++++++++++++++++++");
	  			//console.log(status);
	  			//console.log("++++++++++++++++++");
	  			//console.log(xmlhttprequest);
	  		});
			$scope.prop = 'title';
			$scope.rev = false;
			$scope.fil = '';
			$scope.sortMe = function(field){
				$scope.prop = field;
				$scope.rev = !$scope.rev;
			}
	  	});