
//strings
//arrays

var myString = "Hello World";
let myString2 = "Hello World";
let myString3 = 'Hello World';
let myString4 = `Hello World`;

//struing literals

let myString5 = "Hello World";
let myString6 = 'Hello World';
let myString7 = `Hello World`;

let stringOutput = "this is some string";

let nameOne = "Akshay";
let nameTwo = "Kumar";

let message1 = "Hello " + nameOne + " " + nameTwo;

console.log(message1);

let message2 = `Hello ${nameOne} ${nameTwo}`;

let nameOfSuperHero = "Batman";

//I am batman 

let message3 = `I am ${nameOfSuperHero}`;

console.log(message3);

let exampleArray = [
    "Hello",
    "World",
    "I",
    "am",
    "Batman"
];

console.log(exampleArray);

console.log(exampleArray[4]);

let exampleArray2 = new Array(
    "Hello",
    "World",
    "I",
    "am",
    "Batman"
);

let emptyArray = [];
console.log(exampleArray2[1]);
console.log(emptyArray);
emptyArray.push("Hello");
console.log(emptyArray);
emptyArray.push("World");
console.log(emptyArray);
emptyArray.push("I");
console.log(emptyArray);
emptyArray.push("am");
console.log(emptyArray);
emptyArray.unshift("Batman");
console.log(emptyArray);
emptyArray.pop();
console.log(emptyArray);
emptyArray.shift();
console.log(emptyArray);

//simple string

let myString8 = "Hello World";

console.log(myString8[1]);
console.log(myString8[6]);
console.log(myString8);

console.log(exampleArray);
console.log(exampleArray.length);

for (var i = 0; i < exampleArray.length; i++) {
    console.log(exampleArray[i]);
}

for (var i = 0; i < myString8.length; i++) {
    console.log(myString8[i]);
}

//array of strings

let exampleArray3 = [
    "Hello",
    "World",
    "I",
    "am",
    "Batman"
];

for (var i = 0; i < exampleArray3.length; i++) {
    console.log(exampleArray3[i]);
}

//2 dimensional array

let exampleArray4 = [

    [
        "Hello",
        "World",
        "I",
        "am",
        "Batman"
    ],
    [
        "Hello",
        "Superman"
    ],
    [
        "Hello",
        "World",
        "I",
        "am",
        "Spiderman"
    ]

];

console.log(exampleArray4);
console.log(exampleArray4[0][4]);
console.log(exampleArray4[1][4]);
console.log(exampleArray4[2][4]);

for (var i = 0; i < exampleArray4.length; i++) {
    console.log(exampleArray4[i]);
    for (var j = 0; j < exampleArray4[i].length; j++) {
        console.log(exampleArray4[i][j]);
    }

}
























