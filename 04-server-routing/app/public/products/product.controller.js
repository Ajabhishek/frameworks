(function(){

	angular
		.module("Main.product", [])
		.controller("productController", productController);

	function productController($scope, productsService, $routeParams){

		var productArray = productsService.getProduct($routeParams.id);
		$scope.product = productArray[0];

	}   

}());
