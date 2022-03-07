console.log(bestRapperAlive)
console.log(nbaChamps)

var bestRapperAlive= "Lil Wayne";
let numFingersOnHand = 5;
const numDaysOfWeek = 7;
var nbaChamps = "Bucks";

function fun1(){

    console.log(favComputerBrand)
    console.log(favColor)
    console.log(numStates)
    var favComputerBrand = "Apple";
    var favColor = "Green";

    let numStates = 50

}


/*

ANYTHING DECLARED WITH VAR or function keyword GETS HOISTED TO THE TOP OF THEIR SCOPE

ANYTHING DECLARED WITH CONST OR LET DOES NOT GET HOISTED TO THE TOP OF THEIR SCOPE


*/


//javascript reads the above code like the following (below) after hoisting:
/*
var bestRapperAlive;
var nbaChamps
function fun1(){
    var favComputerBrand;
    var favColor
    console.log(favComputerBrand)
    console.log(favColor)
    console.log(numStates)
    favComputerBrand = "Apple";
    favColor = "Green";
    let numStates = 50
}
console.log(bestRapperAlive)
console.log(nbaChamps)
bestRapperAlive= "Lil Wayne";
let numFingersOnHand = 5;
const numDaysOfWeek = 7;
nbaChamps = "Bucks"
*/

