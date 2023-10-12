/*let js = 'amazing';

console.log(40 + 8 + 23);
console.log("Sohel");
console.log(23);
let firstName = 'Sohel';
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);




let three_years = 3;
let first_name = "Sohel";
console.log('There is anther fisrt_name: ', first_name)


//these are the best way to declare variable.
let my_first_job = "Programmer";
let my_second_job = "Teacher";
console.log('My first Job: ', my_first_job);
console.log('My second job: ', my_second_job);

//these are not best way to declare variable.

let job1 = 'programmer';
let job2 = 'teacher';
console.log('My first Job: ', job1);
console.log('My second job: ', job2);
let i = 0;
for (i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
for (i = 0; i <= 8; i++) {
    console.log('Hello World')
}
console.log('Hello World')
let a = 5, b = 5;
let c = a + b;
console.log(c)

//Variable
*/

/*
true;
console.log(true)

//using 'true' using a variable.

let javaScriftIsFun = true;
console.log(javaScriftIsFun);

console.log(typeof true);
console.log(typeof javaScriftIsFun);
console.log(typeof 32);
console.log(typeof 'Sohel');


javaScriftIsFun = 'yes';
console.log(typeof javaScriftIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1999
console.log(typeof year);
console.log(typeof null);//null is an object here.
*/

//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//

/*let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

console.log(birthYear);

//we can't change constant variable!

const abc = 10;//always we have to initiate the number with the constant variable.

console.log(abc);

var job = 'Programmer';
job = 'teacher';

lastName = 'Sohel';
console.log(lastName);
*/
//.......................................................

//Basic Operators
/*
const now = 2037
const ageSohel = now - 1991;
const ageRana = now - 2018;
console.log(ageSohel, ageRana);

console.log('Sohel');

name1 = 'Sohel';
console.log(name1);
let pi = 3.14;
console.log(pi);
// Math operators;
let javscriftIsFun = true;
console.log(javscriftIsFun);
console.log(2 ** 3);
console.log('This is the first step to start my code daily');
let num1 = 20;
let num2 = 50;
console.log('The sum of two number is : ', num1 + num2);

const num_x = 70;
const age1 = num_x - 20;
const age2 = num_x - 10;
console.log(age1, age2);

/*let x = 10 + 15;
//x *= 10; //x = x*10 here

console.log(x);
x++; // x = x+1;
console.log(x);
x--;
console.log(x);
--x;
console.log(x);*/

//Comparison
//-----------------

/*
console.log(ageSohel > ageRana); //> < >= <=
console.log(ageSohel >= 20);

const isFullAge = ageSohel >= 20;
console.log(now - 1991 > now - 2018);

// order precedence
//..............................

console.log(25 - 10 - 5);
let x, y, z;
x = y = z = 25 - 10 - 5;
console.log(x, y, z);
const averageAge = (ageSohel + ageRana) / 2;
//console.log(averageAge);
console.log(ageSohel, ageRana, averageAge);


/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall*/


/*
Data-01
const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon = 1.95;

const BMImark = massMark / heightMark ** 2;
const BMIjhon = massJhon / (heightJhon * heightJhon);

console.log(BMImark, BMIjhon);

const markHigherBMI = BMImark > BMIjhon;
console.log(BMImark, BMIjhon, markHigherBMI);*/

//Data-02

/*const massMark = 95;
const heightMark = 1.88;
const massJhon = 85;
const heightJhon = 1.76;

const BMImark = massMark / heightMark ** 2;
const BMIjhon = massJhon / (heightJhon * heightJhon);

console.log(BMImark, BMIjhon);

const markHigherBMI = BMImark > BMIjhon;
console.log(BMImark, BMIjhon, markHigherBMI);
*/

/*
//Strings and Template Literals
//...............................

const year = 2037;
const firstName = 'sohel';
const job = ' teacher';
const birthYear1 = 1991;
const sohel = "I'm " + firstName + ', a ' + (year - birthYear1) + ' Year old' + job + ' !';
console.log(sohel);

const sohelNew = `I'm ${firstName}, a ${year - birthYear1} year old ${job}!`;
console.log(sohelNew);

console.log(`Just a reguler strings ....`);
console.log('string with \n\
multiple \n\
times');
console.log(`Strings
multiple
lines`); //Temple Strings Literls.
*/

/*
//If else Statements

 const age = 15;
//const isOldEnough = age >= 18;
if (age >= 18) {
    console.log("Sarah can start driving liencese");
}
else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearLeft} years :`);
    //console.log("Sarah can not start driving liencese");
}

const birthY = 2012;
let century;
if (birthY <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon = 1.95;


//const massMark = 95;
//const heightMark = 1.88;
//const massJhon = 85;
//const heightJhon = 1.76;

const BMImark = massMark / heightMark ** 2;
const BMIjhon = massJhon / (heightJhon * heightJhon);

console.log(BMImark, BMIjhon);

if (BMImark > BMIjhon) {
    console.log(`Mark's BMI (${BMImark}) is higher than Jhon's (${BMIjhon})!`);
} else {
    console.log(`Jhon's BMI (${BMIjhon}) is higher than Jhon's (${BMImark})!`);
}

*/



//type Conversion and Coercion




/*
console.log('Hello')
console.log('Hello world')*/

//If else statement-018

/*const age = 15;
if (age >= 18) {
    console.log('Sara can start driving licence :');
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young ... wait another $ {yearLeft} year`)
}

const birthYear = 1998;

let century;

if (birthYear1 <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/


//  020 Type Conversion and Coercion

/*
let sohel
const inputYear = '1991';
console.log(Number(inputYear), inputYear); //Convert String to number.
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number(sohel));
console.log(typeof NaN); // type of NaN is a number

console.log(String(23), 23)


// type coercion

console.log('I am ' + 23 + ' Years old');
console.log('The sum of three number is: ', Number(23) + Number(10) + 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');
let n = '1' + 1;
//n = n - 1;
console.log(n);
let m;
console.log(m = '5' + 1 + 2 + '7' + '9')

*/


/*
// Truthy and Falsy Number

// 5 falsy values: 0, undefiend, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('sohel'));
console.log(Boolean({}));
console.log(Boolean(''));
//console.log(Boolean());

const money = 0;
if (money) {
    console.log("Don't spend at all! ");
} else {
    console.log("You should get a job!");
}

let height = 40;
if (height) {
    console.log("Yeh! Height is defiend");
} else {
    console.log("Height is Undefiend");
}
*/

/*
//Equality operator
//..................................

const age = '18';
if (age === 18) {
    console.log('You just became an adult :D (strict)');
}
if (age == 18) {
    console.log('You just became an adult :D (loose)');
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) {
    console.log('Cool! 23 is an amaizing number');
} else if (favourite === 7) {
    console.log('7 is also a cool number');

} else if (favourite === 9) {
    confirm.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

//Equal number

if (favourite !== 23) console.log('Why not 23?');
*/

/*
// Basic Boolean Logic:
//----------------------------------

const hasDriverlincense = true;
const hasGoodVision = false;

console.log(hasDriverlincense && hasGoodVision);

console.log(hasDriverlincense || hasGoodVision);

console.log(!hasDriverlincense);

const shouldDrive = hasDriverlincense || hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive:');
} else {
    console.log('Someone should drive!');
}

const isTired = true;
console.log(hasDriverlincense && hasGoodVision && isTired);
*/

// Coading Challenge
// Task -01

// const scoreOfDolphins = (96 + 108 + 89) / 3;
// const scoreOfKoalas = (97 + 112 + 101) / 3;
// console.log(scoreOfDolphins, scoreOfKoalas);

// // Task-02

// if (scoreOfDolphins > scoreOfKoalas) {
//     console.log('Dolphines is winner!');
// } else if (scoreOfDolphins < scoreOfKoalas) {
//     console.log('Koalas is winner!');
// } else if (scoreOfDolphins === scoreOfKoalas) {
//     console.log('Both win the trophy!');
// }

//Bonus 1
// const scoreOfDolphins = (97 + 112 + 101) / 3;
// const scoreOfKoalas = (109 + 95 + 123) / 3;
// console.log(scoreOfDolphins, scoreOfKoalas);
// //const minScore = 100;

// if (scoreOfDolphins > scoreOfKoalas && scoreOfDolphins >= 100) {
//     console.log('Dolphines is winner!');
// } else if (scoreOfDolphins < scoreOfKoalas && scoreOfKoalas >= 100) {
//     console.log('Koalas is winner!');
// } else if (scoreOfDolphins === scoreOfKoalas) {
//     console.log('Both win the trophy!');
// }

//Bonus 2

// const scoreOfDolphins = (97 + 112 + 81) / 3;
// const scoreOfKoalas = (109 + 95 + 86) / 3;
// console.log(scoreOfDolphins, scoreOfKoalas);
// //const minScore = 100;

// if (scoreOfDolphins > scoreOfKoalas && scoreOfDolphins >= 100) {
//     console.log('Dolphines is winner!');
// } else if (scoreOfDolphins < scoreOfKoalas && scoreOfKoalas >= 100) {
//     console.log('Koalas is winner!');
// } else if (scoreOfDolphins === scoreOfKoalas && scoreOfDolphins >= 100 && scoreOfKoalas >= 100) {
//     console.log('Both win the trophy!');
// } else {
//     console.log('No one wins the trophy!');
// }


// The switch Statement
//...............................................

// const day = 'monday';

// switch (day) {
//     case 'monday':
//         console.log('Plan cousre structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('prepare theory videos.');
//         break;
//     case 'wednesday':
//         break;
//     case 'thursday':
//         break;
//     case 'friday':
//         console.log('record videos');
//     case 'saturday':
//         break;
//     case 'sunday':
//         console.log('Enjoy the weekend :3');
//         break;
//     default:
//         console.log('Not a valid day!');
// }


// if (day == 'monday') {
//     console.log('Plan cousre structure');
//     console.log('Go to coding meetup');
// } else if (day === 'friday') {

// } else if (day === 'sunday' || day === 'tuesday') {

// } else if (day === 'saturday') {

// }


// let num = Number(prompt('Whats your number'));
// console.log('The number is: ', num);

// const dayNumber = 20;
// switch (dayNumber) {
//     case 30:
//         console.log('Here is the first day for you');
//         console.log('This is your 947');
//         break;
//     case 20:
//         console.log('There is something');
//         console.log('for you');
//         break;
//     default:
//         console.log('those thing is right');
// }


// console.log('sdhfdhgfg');
// console.log('sdfhgfd dgfdfdf')
// console.log('sdhgfhgff d')

// const age = 10;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');



// const oldAge = 5;
// oldAge >= 10 ? console.log('I like you') :
//     console.log('I dont like you, Sorry!');

// const age = 25

// const drink = age >= 18 ? 'wine' : 'Water';
// console.log(drink);

// //print the result outside the if else statement:
// let drink2
// if (age >= 18) {
//     drink2 = 'Wine';
// } else {
//     drink2 = 'Water';
// }
// console.log(drink2);


// console.log(`I like to drink ${age >= 18 ? 'wine' : 'Water'}`);

// Coading Challenges 
//________________________________________

// Task01

const billValue;

if (billValue >= 50 && billValue <= 300) {
    console.log('Payment 15%');
} else {
    console.log('Different payment!');
}

// Task 02

