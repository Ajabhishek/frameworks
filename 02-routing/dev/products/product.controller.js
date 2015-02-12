(function(){

	angular
		.module("Main.product", [])
		.controller("productController", productController);

	function productController($scope, productsService, $routeParams){

		
		/*var modelProduct = function(data){
			$scope.product = data.filter(function(element){
				if(element.id === $routeParams.id){
					return element;
				}
			});
		}*/

		var modelProduct = function(productArray){
			$scope.product = productArray[0];
		}

		productsService.getProduct($routeParams.id)
			.then(modelProduct);
	}

}());