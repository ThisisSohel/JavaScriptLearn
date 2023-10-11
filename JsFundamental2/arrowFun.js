function calage1 (birthYear){
    return 2037 - birthYear;
}

const age1 = calage1(1991);

function calage2 (birthYear){
   return 2037 - birthYear;
}

const age2 = calage2(1991);

console.log(age1, age2);


const calage3 = birthyear => 2037 - birthyear;

const age3 = calage3(1991);

console.log(age3);

const yearsUntilRetirement = (birthYear, fristName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${fristName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Sohel'));
console.log(yearsUntilRetirement(1993, 'Rana'));



//Another good Example of Arrow function


const calAverage = (a, b, c) => (a + b + c) / 3;


const scoreSohel = calAverage(20, 40, 60);
const scoreRana = calAverage(20, 40, 50);

console.log (`The average score of Sohel is ${scoreSohel} and the average score of Rana is ${scoreRana}`);
