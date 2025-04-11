
// Create variables for name, age, and nationality
let name = "Miracle";
let age = 23;
let nationality = "Nigerian";

// Combine into a sentence
let introduction = "Hello! My name is " + name + ", I'm " + age + " years old and I'm " + nationality + ".";
console.log(introduction);

// Store your favorite quote
let quote = "Some people are worth melting for.";

// Convert to uppercase
let upperQuote = quote.toUpperCase();
console.log(upperQuote);

// Convert to lowercase
let lowerQuote = quote.toLowerCase();
console.log(lowerQuote);

// Store a word
let word = "sunshine";

// Reverse the word
let reversed = word.split("").reverse().join("");
console.log("Reversed word:", reversed);

// Prices of three items
let item1 = 150;
let item2 = 200;
let item3 = 350;

// Calculate total
let totalPrice = item1 + item2 + item3;
console.log("The total price of the items is ₦" + totalPrice);

// Test scores
let score1 = 80;
let score2 = 75;
let score3 = 90;
let score4 = 85;
let score5 = 70;

// Calculate average
let average = (score1 + score2 + score3 + score4 + score5) / 5;
console.log("The average score is", average);

// Array of favorite foods
let favoriteFoods = ["Jollof Rice", "Pizza", "Shawarma", "Potato", "Spaghetti"];

// Display first and last
console.log("First food:", favoriteFoods[0]);
console.log("Last food:", favoriteFoods[favoriteFoods.length - 1]);

// Add one at the beginning
favoriteFoods.unshift("Fried Rice");

// Add one at the end
favoriteFoods.push("Ice Cream");

// Display updated list
console.log("Updated favorite foods:", favoriteFoods);

// Array for jssOne students
let jssOne = ["Ada", "Bola", "Chidi", "Efe", "Fatima", "Grace", "Henry", "Ife", "John", "Kate"];

// Array for jssTwo students
let jssTwo = ["Lola", "Musa", "Ngozi", "Oscar", "Paul", "Queen", "Rita", "Samuel", "Tina", "Uche"];

// Array for jssThree students
let jssThree = ["Victor", "Wale", "Xena", "Ashley", "Zainab", "Amaka", "Ben", "Chisom", "Dayo", "Emeka"];
