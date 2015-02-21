(function(){

	var productsService = function($http){

		var categoriesSelected = [],
			products = [];

		var getProducts = function(){
			var data;
			return $http.get("/products")
						.then(function(response){
							setProducts(response.data);
							return response.data;
						})
		};

		var setProducts = function(data){
			products = data;
		}

		var getProduct = function(id){
			return findProductInArray(products, id);
		}
		
		var findProductInArray = function(data, id){
			return data.filter(function(element){
				if(element.id === id){
					return element;
				}
			});
		}

		var getCategories = function(){
			return $http.get("data/categories.json")
						.then(function(response){
							return response.data;
						})
		};

		var getCategoriesSelected = function(){
      		return categoriesSelected;
      	}

		var categoryChange = function(category){
			var i = categoriesSelected.indexOf(category);
            if (i > -1) {
                categoriesSelected.splice(i, 1);
            } 
            else {
                categoriesSelected.push(category);
            }

        };

        var productFilter = function(product){
            if (categoriesSelected.length > 0) {
                if (categoriesSelected.indexOf(product.category) < 0){
                    return;
                }
            }
            return product;
        }  


		return {
			getProducts: getProducts,
			getProduct: getProduct,
			getCategories: getCategories,
			productFilter: productFilter,
			categoryChange: categoryChange,
			getCategoriesSelected: getCategoriesSelected
		}

	}

	angular
		.module("Main")
		.factory("productsService", productsService); 

}());