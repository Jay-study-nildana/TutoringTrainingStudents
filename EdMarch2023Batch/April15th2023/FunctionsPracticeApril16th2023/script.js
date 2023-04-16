
console.log(`hello`)

let a = 10;
let b = 20;

let addresult = a + b;
console.log(`the two numbers result is `+ addresult);

let c = 30;
let d = 40;
let addresult2 = c + d; 
console.log(`the two numbers result is ` + addresult2);

function AddTwoNumbers(numberOne,numberTwo)
{
  let result = numberOne + numberTwo;
  return result;
}

function ShowAdditionOutput(resultvalue)
{
  console.log(`the two numbers result is ` + resultvalue);
}

let e = 100;
let f = 200;

let addresult3 = AddTwoNumbers(e,f);
console.log(`the two numbers result is ` + addresult3);

let g = 150;
let h = 150;

let addresult4 = AddTwoNumbers(g,h);
console.log(`the two numbers result is ` + addresult3);

let i = 400;
let j = 400;
let addresult5 = AddTwoNumbers(i,j);
ShowAdditionOutput(addresult5);