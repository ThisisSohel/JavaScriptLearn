const sohel = {
    firstName: 'Sohel',
    lastName: 'Rana',
    birthYear: 1998,
    job: 'Teacher',
    friends: ['Rahim', 'Karim', 'Hamim'],

    // calAge: function (birthYear) {
    //      return 2037 - birthYear;
    // }

    calAge: function(){
        // console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};


//console.log(sohel.calAge(1991));
///console.log(sohel['calAge'](1991)); //Another way to call object function

//acces data using 'this' operator

console.log(sohel.calAge());
console.log(sohel.age); //Most efficient way to call the obj function


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return  this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return  this.bmi;
    }
};


mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);


