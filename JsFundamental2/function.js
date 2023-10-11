function logger() {
    console.log('My name is Sohel');
}

logger();


function fruitProcessor(apples, oranges){
    console.log(apples, oranges);

    const juice = `juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

const appleJuice = fruitProcessor(5,  0);

console.log(appleJuice);


function calage1 (birthYear){
     return 2037 - birthYear;
}

const age1 = calage1(1991);

function calage2 (birthYear){
    return 2037 - birthYear;
}

const age2 = calage2(1991);

console.log(age1, age2);
