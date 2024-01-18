const restaurant = {
  name: "Savor Bistro",
  location: {
    city: "Metropolis",
    state: "Techland",
    country: "Digitalia"
  },
  bestItems: ["Signature Pasta", "Grilled Salmon", "Tiramisu"],
  foodCategories: ["Italian", "Seafood", "Desserts"],
  order: function(bestIndex, categoriesIndex){
    return [this.bestItems[bestIndex], this.foodCategories[categoriesIndex]]
  }
};


// let [main, , secondary] = restaurant.menu.bestItems

// console.log(main, secondary);

// // Switching Variables

// [main, secondary] = [secondary, main]
// console.log(main, secondary);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);


