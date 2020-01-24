// Loop over this array and add up all of the numbers
var costs = [1.1, 3, 0.5, 20, 1.4];
var total = 0;
// Your code here ...
// And then...
console.log("The total is £" + total);

function totalCosts() {
    for(var i; i < 5; i++) {
console.log(Costs[i]) 

}
}


var person = {
    name: "Chris", age:"31", height:"6ft2" 
};

function printMyDetails (person) {
    return("Hi my name is" + person.name  + "I am" + person.age + "and I am" + person.height);
}

var personDetails = printMyDetails()

// sort a list of numbners in order of numerical value

// code that reorders a list

var list = [100, 1, 101, 23, 54]
function sortProperly (a,b) {
    if (a < b) {
return -1;
} 
    else if (b < a) {
return 1;
}
else if (a===b) {
return 0;
}
}