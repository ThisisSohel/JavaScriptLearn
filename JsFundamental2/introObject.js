//JS Array
const sohelArray = [
    'sohel',
    'rana',
    2037 - 1991,
    'Engineer',
    ['Rahim', 'Karim', 'Hamim']
];

// JS Object

const sohel = {
    firstName: 'sohel',
    lastName: 'rana',
    age: 2037 - 1991,
    job: 'Engineer',
    friends: ['Rahim', 'Karim', 'Hamim']
};
//  if (sohel.firstName === 'sohel'){
//     console.log('Sohel is my friend');
//  }

console.log(sohel);


//Dot Vs Bracket Notation


console.log(sohel.lastName);
console.log(sohel['lastName']);

const nameKey = 'Name';

console.log('First name-',sohel['first' + nameKey]);
console.log('Last name-',sohel['last' + nameKey]);

// Add object values using Dot Operation

sohel.location = 'Bangladesh';
sohel['Email'] = 'mdsrana11@gmail.com';

console.log(sohel);

