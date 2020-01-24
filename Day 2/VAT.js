//Exercise
//Make a function to remove the repetition here:

var priceForSofa = 500 + (500 / 100) * 20;
var priceForTv = 140 + (240 / 100) * 20;
var priceForPlayStation = 200 + (20 / 100) * 20;
//Solution
function calculateVAT(itemPrice) {
  return itemPrice + (itemPrice / 100) * 20;
}

var priceForSofa = calculateVAT(500);
var priceForTv = calculateVAT(140);
var priceForPlayStation = calculateVAT(200);

//Why pay a fortune teller when you can just program your fortune yourself?

//Write a function named tellFortune that:
//takes 4 arguments: number of children, partner's name, geographic location, job title.
//outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//Call that function 3 times with 3 different values for the arguments.

// Function tellFortune(children, name, location, job) {
//     return ("You will be a" + in "", and married to "" with "" kids.")
// }
// var x = ("children")
// var y = (name)
// var z = (location)
// var w = (job)


function calculateDogAge(age) {
    var dogYears =7*age
console.log("Your puppy is" + dogYears+ "years old in dog years!"); 
} // this code has worked and return 21 if you call calculateDogAge(3)

function calculateSupply(age, amountPerDay) {
    var faveSnackPD = amountPerDay
    var faveSnackAge = age
    faveSnackLS() = faveSnackPD * faveSnackAge

    console.log ("You will need" faveSnackPD "to last you until the ripe old age of" faveSnackAge)
}
calculateSupply(3, 1)
