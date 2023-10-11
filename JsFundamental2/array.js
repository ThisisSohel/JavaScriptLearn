const friend1 = 'Rahim';
const friend2 = 'kahim';
const friend3 = 'hahim';

//This is inconvinient way......




const friends = ['Rahim', 'Karim', 'Hamim'];

console.log(friends)

const years = new Array(1991, 1992, 1993);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);


// Array can holds different type of values

const firstName = 'Sohel';

const demo = [firstName, 'Rana', 30];
const demoLength = demo.length;
console.log(demo, demoLength);


//excercise


const calage = function (birthYear) {

    return 2037 - birthYear;
}

const individualYear = [1990, 1967, 2002, 2028];

const age1 = calage(individualYear[0]);

const ages = [calage(individualYear[0]), calage(individualYear[1]), calage(individualYear[2])]

console.log(ages);











