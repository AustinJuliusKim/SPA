angular
	.module('mainApp')
	.controller('MainController', MainController);

	MainController.$inject = ['$http', '$routeParams', '$window'];

	function MainController($http, $routeParams, $window){

		var self = this;
		self.params = $routeParams;
		self.getDrinkIndex = getDrinkIndex;
		self.createDrink = createDrink;
		self.showDrink = showDrink;
		self.editDrink = editDrink;

		function getDrinkIndex(){
			return $http({
				method: "GET",
				url: "/api/drinks"
			})
			.success(function(data){
				console.log(data);
				self.jsonDrinks = data;
			})
			.error(function(data){
				console.log('errors');
				console.log(data);
			});
		}

		function createDrink(){
			var newDrink = {
				name: self.name,
				recipe: self.recipe,
				price: self.price
			}
			console.log(newDrink);
			$http.post("/api/drinks", newDrink)
				.success(function(data){
					console.log("successfully created drink");
					$window.location.href = ("#/drinks/" + data.id);
				})
				.error(function(data){
					console.log("something went wrong");
					console.log(data);
				});
		}

		function editDrink(){
			var url = "/api/drinks/" + self.params.id
			var editedDrink = {
				name: self.currentDrink.name,
				recipe: self.currentDrink.recipe,
				price: self.currentDrink.price
			}
			$http.patch(url, editedDrink)
				.succes(function(data){
					console.log("Drink successfully edited");
					self.updatedDrink = data;
					$window.location.href = ("#/drinks/" + data.id);
				})
				.error(function(data){
					console.log("something went wrong");
					console.log(data);
				})
		}

		function showDrink(){
			var url = "/api/drinks/" + self.params.id;
			console.log(self.params);
			console.log(url);
			$http.get(url)
				.success(function(data){
					console.log("Retrieve drink successful");
					self.currentDrink = data;
				})
				.error(function(data){
					console.log("something went wrong");
				});
		}
	}