//Much of this seems like what we did in guided practice, so I will be basically recalling the methods we used there..
const coffeeMenu = require("./coffeeData")

const printDrink = (drink) => { //Trying some shorthand in this workshop as well..
    return drink.name
} 
console.log(coffeeMenu.map(printDrink))

const fiveUnder = (drink) => {
    return drink.price <= 5;
}
const drinkFiveUnder = coffeeMenu.filter(fiveUnder);
console.table(drinkFiveUnder); //Ran into an issue here trying to call an array as a function. Mistakenly tried to .map..

const evenNum = (drink) => {
    return drink.price % 2 === 0;
}
const evenPrice = coffeeMenu.filter(evenNum);
console.table(evenPrice);

const initialVal = 0;
const oneOfAll = (price) => coffeeMenu.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialVal);
console.log(oneOfAll);

const isSeasonal = (drink) => {
    return drink.seasonal === true;
}
const SeasonalDrink = coffeeMenu.filter(isSeasonal);
console.table(SeasonalDrink);

const SeasonDrinkName = (drink) => {
if (drink.seasonal === true){
    return drink.name
}
}
const Pls = coffeeMenu.map(SeasonDrinkName);

console.log(SeasonDrinkName + " is made with Imported beans!");
