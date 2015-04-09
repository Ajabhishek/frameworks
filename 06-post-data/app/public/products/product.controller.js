(function(){

	angular
		.module("Main.product", [])
		.controller("productController", productController);

	function productController($scope, productsService, $routeParams){

		if($routeParams.id){
			var productArray = productsService.getProduct($routeParams.id);
			$scope.product = productArray[0];
		}

		var notify = function(notification){
			$scope.notification = notification;
		}

		$scope.save = function(){
			var product = {
				id: this.id,
				name: this.name,
				price: this.price,
				category: this.category,
				image: this.image,
				brewery: this.brewery,
				alcohol: this.alcohol
			}

			productsService.saveProduct(product)
				.then(notify);
			//notify(productsService.saveProduct(product));
		}

	}   

}());
