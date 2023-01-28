//objects

//sample object with all data types

var person = {
    name: "John",
    age: 31,
    favColor: "green",
    height: 183,
    "full name" : "John Doe",

    printName() {
        console.log("My name is " + this.name);
    },

    getColor() {
        console.log("My favorite color is " + this.favColor);
    },

    getColorPart2() {
        console.log("My favorite color is " + this["favColor"]);
    },

    getFullName() {
        console.log("My full name is " + this["full name"]);
    }

};

console.log(person);

console.log(person.name
    );

console.log(person.age);

//this is not going to work.
//console.log(person.full name);

//this is how you access the full name property
console.log(person["full name"]);

person.name = "Jay";

person["full name"] = "Vijayasimha Bachahally Radhakrishnan";

console.log(person);

person.printName();
person.getColor();
person.getColorPart2();
person.getFullName();


