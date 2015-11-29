angular
.module("synechronModule")
.factory("dynamicFactory", function($http){
	var getHeroAjax = $http.get("data/heroes.json");
	return {
		hd : getHeroAjax
	};
});
