const friends = ['Rahim', 'Karim', 'Hamim'];

//Add Elements

friends.push ('jay');
console.log(friends);

friends.unshift('Rahim');
console.log(friends);

//Remove Element


friends.pop(); //remove from last position

const popped = friends.pop();
console.log(popped);
console.log(friends);
friends.shift(); //remove from frist
console.log(friends);


// Find the index of an element 
console.log(friends.indexOf('karim'));
console.log(friends.includes('Rahim'));
console.log(friends.includes('him'));

if(friends.includes('Rahim')){
    console.log('I have a friend called Rahim');
}else{
    console.log("I do not have a friend");
}

