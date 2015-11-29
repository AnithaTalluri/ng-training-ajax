angular
	  	.module("synechronModule")
	  	.controller("moviesController", function($scope, $routeParams, dynamicFactory){
	  		$scope.heroid = $routeParams.id;
	  		$scope.moviesList = [];
	  		
	  		var getMovies = function(val){
	  			// for( hero in $scope.heros ){
	  			for(var i = 0; i < $scope.heros.length ; i++){
	  				if($scope.heros[i].id == val){
	  					$scope.moviesList = $scope.heros[i].movieslist;
	  				}
	  			}
	  		};

	  		dynamicFactory
	  		.hd
	  		.success(successHandler)
	  		.error(errorHandler);
	  		
	  		function successHandler(r,s,x){
	  			$scope.heros = r
				getMovies($scope.heroid);
	  		}
	  		function errorHandler(e,s){
	  			console.log(e)
	  		}
					
			
			$scope.prop = 'title';
			$scope.rev = false;
			$scope.fil = '';
			$scope.sortMe = function(field){
				$scope.prop = field;
				$scope.rev = !$scope.rev;
			}
	  	});