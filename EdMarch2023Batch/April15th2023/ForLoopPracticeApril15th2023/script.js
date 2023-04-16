
console.log(`hello`)

//functions 

function ShowCollectionOfFamilies(collectionOfFamilesForDisplay)
{
    //console
    console.log(`----------------------------------`)
    console.log(`-----KKKKK-----Showing Bollywood Families Now-----KKKKK-----`);
    console.log(`----------------------------------`)

    //total number of families

    let totalNumberOfFamilies = collectionOfFamilesForDisplay.length;

    //console log total number of families

    console.log(`Total Number of Families : ${totalNumberOfFamilies}`);


    for(let i = 0; i < collectionOfFamilesForDisplay.length; i++){

        let momSentence3 = `Mom’s Name : ${collectionOfFamilesForDisplay[i].mom}`;
        let dadSentence3 = `Dad’s Name : ${collectionOfFamilesForDisplay[i].dad}`;
        let childSentence3 = `Child’s Name : ${collectionOfFamilesForDisplay[i].child}`;

        console.log(momSentence3);
        console.log(dadSentence3);
        console.log(childSentence3);

        console.log(`----------------------------------`)
    }
}



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


console.log(`----------------------------------`)
console.log(`----------------------------------`)
console.log(`----------------------------------`)

//add another family

let familyFour = {
    mom: 'Sonakshi Sinha',
    dad: 'Mahesh Bhatt',
    child: 'baby Bhatt'
};

collectionOfFamiles[3] = familyFour;

console.log(collectionOfFamiles);

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

let familyFive = {
    mom: 'Kareena Kapoor',
    dad: 'Saif Ali Khan',
    child: 'Taimur Ali Khan'
};

collectionOfFamiles[4] = familyFive;

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


//add a family

let familySix = {
    mom: 'Aishwarya Rai',
    dad: 'Abhishek Bachchan',
    child: 'Aaradhya Bachchan'
};

collectionOfFamiles[5] = familySix;

//call show collection function

ShowCollectionOfFamilies(collectionOfFamiles);

//add a family

let familySeven = {
    mom: 'Kajol',
    dad: 'Ajay Devgn',
    child: 'Nysa Devgn'
};

collectionOfFamiles[6] = familySeven;

//call show collection function

ShowCollectionOfFamilies(collectionOfFamiles);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

let randomNumberTestOne = getRandomIntInclusive(0, 6);
console.log(randomNumberTestOne);
//get another random number
let randomNumberTestTwo = getRandomIntInclusive(0, 6);
console.log(randomNumberTestTwo);



//we need an array with 20 indian women names

let listOfIndianWomenNames = ['Ameesha Patel', 'Sharon Stone', 'Angelina Jolie', 'Sonakshi Sinha', 'Kareena Kapoor', 'Aishwarya Rai', 'Kajol', 'Priyanka Chopra', 'Deepika Padukone', 'Katrina Kaif', 'Madhuri Dixit', 'Kareena Kapoor', 'Aishwarya Rai', 'Kajol', 'Priyanka Chopra', 'Deepika Padukone', 'Katrina Kaif', 'Madhuri Dixit', 'Kareena Kapoor', 'Aishwarya Rai'];

//we need an array with 20 indian men names

let listofIndianMenNames = [`Bruce Wayne`, `Tom Cruise`, `Brad Pitt`, `Mahesh Bhatt`, `Saif Ali Khan`, `Abhishek Bachchan`, `Ajay Devgn`, `Ranbir Kapoor`, `Ranveer Singh`, `Salman Khan`, `Shah Rukh Khan`, `Saif Ali Khan`, `Abhishek Bachchan`, `Ajay Devgn`, `Ranbir Kapoor`, `Ranveer Singh`, `Salman Khan`, `Shah Rukh Khan`, `Saif Ali Khan`, `Abhishek Bachchan`];

let listofIndianChildrenNames = [`Damian Wayne`, `Connor Cruise`, `Shiloh Jolie-Pitt`, `baby Bhatt`, `Taimur Ali Khan`, `Aaradhya Bachchan`, `Nysa Devgn`, `Aryan Khan`, `AbRam Khan`, `Yash`, `Roohi`, `Taimur Ali Khan`, `Aaradhya Bachchan`, `Nysa Devgn`, `Aryan Khan`, `AbRam Khan`, `Yash`, `Roohi`, `Taimur Ali Khan`, `Aaradhya Bachchan`];

function CreateRandomFamily() {

    let randomNumberForMother = getRandomIntInclusive(0,listOfIndianWomenNames.length - 1);
    let randomNumberForFather = getRandomIntInclusive(0,listofIndianMenNames.length - 1);
    let randomNumberForChild = getRandomIntInclusive(0,listofIndianChildrenNames.length - 1);

    let mom = listOfIndianWomenNames[randomNumberForMother];
    let dad = listofIndianMenNames[randomNumberForFather];
    let child = listofIndianChildrenNames[randomNumberForChild];

    let randomFamily = {
        mom: mom,
        dad: dad,
        child: child
    };

    return randomFamily;
}

let numberOfFamiliestoGenerate = 10000;
//for loop to create 100 random families

let collectionOfFamiles2 = [];

for(let i = 0; i < numberOfFamiliestoGenerate; i++){
    
        console.log(`generating family number ${i}`)
        let randomFamily = CreateRandomFamily();
        console.log(randomFamily);
    
        collectionOfFamiles2[i] = randomFamily;
    }

    ShowCollectionOfFamiliesPart2(collectionOfFamiles2);

function ShowCollectionOfFamiliesPart2(collectionOfFamilesForDisplay)
{
    //console
    console.log(`----------------------------------`)
    console.log(`-----KKKKK-----Showing Bollywood Families Now-----KKKKK-----`);
    console.log(`----------------------------------`)

    console.log(collectionOfFamilesForDisplay);

    //total number of families

    let totalNumberOfFamilies = collectionOfFamilesForDisplay.length;

    //console log total number of families

    console.log(`Total Number of Families : ${totalNumberOfFamilies}`);


    for(let i = 0; i < collectionOfFamilesForDisplay.length; i++){

        //console log i value

        console.log(`----------------------------------`)
        console.log(`Family Number : ${i}`);

        let momSentence3 = `Mom’s Name : ${collectionOfFamilesForDisplay[i].mom}`;
        let dadSentence3 = `Dad’s Name : ${collectionOfFamilesForDisplay[i].dad}`;
        let childSentence3 = `Child’s Name : ${collectionOfFamilesForDisplay[i].child}`;

        console.log(momSentence3);
        console.log(dadSentence3);
        console.log(childSentence3);

        console.log(`----------------------------------`)
    }
}





























