//console doing increment operators

console.log(`doing increment and decrement operators`);

let ageofJaySir = 40;
let incrementValue = 1;
let nextAge = ageofJaySir + incrementValue;
let nextNextAge = nextAge + incrementValue;


console.log(`Jay Sir's age is ${ageofJaySir}`);
console.log(`Jay Sir's next age is ${nextAge}`);
console.log(`Jay Sir's next next age is ${nextNextAge}`);

let ageofAmeesha = 47;
console.log(`Ameesha's age is ${ageofAmeesha}`);
let nextAgeofAmeesha = ageofAmeesha++;
console.log(`Ameesha's age is ${ageofAmeesha}`);
let nextNextAgeofAmeesha = ageofAmeesha++;
console.log(`Ameesha's age is ${ageofAmeesha}`);

let yearsRemainingJaySir = 25;
let yearsRemainingin2024forJaySir = yearsRemainingJaySir--;
console.log(`Jay Sir's years remaining in 2024 is ${yearsRemainingin2024forJaySir}`);
let yearsRemainingin2025forJaySir = yearsRemainingJaySir--;
console.log(`Jay Sir's years remaining in 2025 is ${yearsRemainingin2025forJaySir}`);

let yearsRemainingAmeesha = 43;
let decrementValueForAmeesha = 1;
let yearsRemainingin2024forAmeesha = yearsRemainingAmeesha - decrementValueForAmeesha;
let yearsRemainingin2025forAmeesha = yearsRemainingin2024forAmeesha - decrementValueForAmeesha;

console.log(`Ameesha's years remaining in 2024 is ${yearsRemainingin2024forAmeesha}`);
console.log(`Ameesha's years remaining in 2025 is ${yearsRemainingin2025forAmeesha}`);

let jumpingIncrement = 5;
let beginningPosition = 0;

let firstJump = beginningPosition + jumpingIncrement;
let secondJump = firstJump + jumpingIncrement;
let thirdJump = secondJump + jumpingIncrement;
let fourthJump = thirdJump + jumpingIncrement;



console.log(`First jump is ${firstJump}`);
console.log(`Second jump is ${secondJump}`);
console.log(`Third jump is ${thirdJump}`);
console.log(`Fourth jump is ${fourthJump}`);


let beginningPositionPart2 = 0;
let jumpingIncrementPart2 = 5;

let firstJumpPart2 = beginningPositionPart2;
let secondJumpPart2 = firstJumpPart2 += jumpingIncrementPart2;
let thirdJumpPart2 = secondJumpPart2 += jumpingIncrementPart2;
let fourthJumpPart2 = thirdJumpPart2 += jumpingIncrementPart2;
let fifthJumpPart2 = fourthJumpPart2 += jumpingIncrementPart2;

console.log(`First jump is ${firstJumpPart2}`);
console.log(`Second jump is ${secondJumpPart2}`);
console.log(`Third jump is ${thirdJumpPart2}`);
console.log(`Fourth jump is ${fourthJumpPart2}`);
//console.log(`Fifth jump is ${fifthJumpPart2}`);