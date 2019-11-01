//User Object
let user = {
userLocation: "kitchen",
sublocation: "",
userInventory: ["empty"], 
userWallet: 0,
health: 100,
getLocation: function() {
	return this.userLocation;
	},
checkHealth: function() {
	if (user.health <= 0) {
		confirm("You died.")
		init();
		}
	},
increaseMoney: function(amount) {
user.userWallet += amount;
	}
}
