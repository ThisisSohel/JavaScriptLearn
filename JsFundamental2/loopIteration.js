//Simple lopp

for(let rep =1; rep<=10; rep++){
    console.log(`${rep}- hello`);
}

//Lopping array, Breaking and continuing

const sohel = [
    'Sohel',
    'Rana',
    2037 - 1998,
    'teacher',
    ['Rahim', 'Karim', 'Hamim']
];
const type = [];
for(let rep =0; rep< sohel.length; rep++){
    console.log(sohel[rep], typeof sohel[rep]);
    type.push(sohel[rep]);  //to take value one array to another array
}

console.log(type);

//continue and break


console.log('===Only String===');

for(let i = 0; i < sohel.length; i++){
    if(typeof sohel[i] !== 'string') continue;

    console.log(sohel[i], typeof sohel[i]);
}


console.log('===Only Number===');

for(let i = 0; i < sohel.length; i++){
    if(typeof sohel[i] === 'number') break;

    console.log(sohel[i], typeof sohel[i]);
}


//while loop

let rep = 1;
while(rep <= 5){
    console.log(`Lifting weight repetition ${rep}`);
    rep++;
}
