
console.log(`hello`)

let momsName = `Ameesha Patel`;
let dadsName = `Bruce Wayne`;
let childsName = `Damian Wayne`;

let momSentence = `Mom’s Name : ${momsName}`;
let dadSentence = `Dad’s Name : ${dadsName}`;
let childSentence = `Child’s Name : ${childsName}`;

console.log(momSentence);
console.log(dadSentence);
console.log(childSentence);


let evilGrandMother = [];

let firstChild = 'Old Person Guy';
let secondChild = 'Short Person Guy';
let thirdChild = 'Kanjoos Guy';
let fourthChild = "Truly Evil Aunt";
let fifthChild = "Died Early Guy";
let sixthChild = "Most Useless Guy";

evilGrandMother[0] = firstChild;
evilGrandMother[1] = secondChild;
evilGrandMother[2] = thirdChild;
evilGrandMother[3] = fourthChild;
evilGrandMother[4] = fifthChild;
evilGrandMother[5] = sixthChild;

evilGrandMother[6] = 'New Guy';


console.log(evilGrandMother);

for(let i = 0; i < evilGrandMother.length; i++){
    console.log(evilGrandMother[i]);
}

console.log(`----------------------------------`)

for(let i = 0; i < 6; i++){
    console.log(evilGrandMother[i]);
}


let listOfMoms = [];

let momNumberOne = 'Ameesha Patel';
let momNumberTwo = 'Sharon Stone';
let momNumberThree = 'Angelina Jolie';

listOfMoms[0] = momNumberOne;
listOfMoms[1] = momNumberTwo;
listOfMoms[2] = momNumberThree;

let dadNumberOne = 'Bruce Wayne';
let dadNumberTwo = 'Tom Cruise';
let dadNumberThree = 'Brad Pitt';

let listOfDads = [];

listOfDads[0] = dadNumberOne;
listOfDads[1] = dadNumberTwo;
listOfDads[2] = dadNumberThree;

let childNumberOne = 'Damian Wayne';
let childNumberTwo = 'Connor Cruise';
let childNumberThree = 'Shiloh Jolie-Pitt';

let listOfChildren = [];

listOfChildren[0] = childNumberOne;
listOfChildren[1] = childNumberTwo;
listOfChildren[2] = childNumberThree;


console.log(`----------------------------------`)

//for loop list of moms

for(let i = 0; i < listOfMoms.length; i++){
    let momSentence = `Mom’s Name : ${listOfMoms[i]}`;
    let dadSentence = `Dad’s Name : ${listOfDads[i]}`;
    let childSentence = `Child’s Name : ${listOfChildren[i]}`;

    console.log(momSentence);
    console.log(dadSentence);
    console.log(childSentence);
    //console.log(listOfMoms[i]);

    //console log divider
    console.log(`----------------------------------`)
}


let collectionOfFamiles = [];

let familyOne = { 
    mom: 'Ameesha Patel',
    dad: 'Bruce Wayne',
    child: 'Damian Wayne'
};

console.log(familyOne);

//console show name of mom in a sentence

let momSentence2 = `Mom’s Name : ${familyOne.mom}`;
console.log(momSentence2);

//console show name of dad in a sentence

let dadSentence2 = `Dad’s Name : ${familyOne.dad}`;
console.log(dadSentence2);

//console show name of child in a sentence

let childSentence2 = `Child’s Name : ${familyOne.child}`;
console.log(childSentence2);


let familyTwo = {
    mom: 'Sharon Stone',
    dad: 'Tom Cruise',
    child: 'Connor Cruise'
};

let familyThree = {
    mom: 'Angelina Jolie',
    dad: 'Brad Pitt',
    child: 'Shiloh Jolie-Pitt'
};

collectionOfFamiles[0] = familyOne;
collectionOfFamiles[1] = familyTwo;
collectionOfFamiles[2] = familyThree;

console.log(collectionOfFamiles);

console.log(`----------------------------------`)

//for loop for collectionOfFamiles

for(let i = 0; i < collectionOfFamiles.length; i++){

    let momSentence3 = `Mom’s Name : ${collectionOfFamiles[i].mom}`;
    let dadSentence3 = `Dad’s Name : ${collectionOfFamiles[i].dad}`;
    let childSentence3 = `Child’s Name : ${collectionOfFamiles[i].child}`;

    console.log(momSentence3);
    console.log(dadSentence3);
    console.log(childSentence3);

    console.log(`----------------------------------`)
}























