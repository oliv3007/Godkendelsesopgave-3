class User{
    constructor(userid, firstname, lastname, age, gender, interest, location){
        this.userid = userid;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.interest = interest;
        this.location = location;
    }
}

class FreeUser extends User{
    constructor(userid, firstname, lastname, age, gender, interest, location){
        super(userid, firstname, lastname, age, gender, interest, location);
    }
}

class PaymentUser extends User{
    constructor(userid, firstname, lastname, age, gender, interest, location, creditcard){
        super(userid, firstname, lastname, age, gender, interest, location);
        this.creditcard = creditcard;
    }
}

const Creditcard = require('./creditcard')
const Interest = require('./interest')

var User1 = new PaymentUser(1, 'Oiver', 'Andersen', 21, 'male',  Interest.myInterest1, 'Copenhagen', Creditcard);
var User2 = new User(2, 'Ida', 'Jensen', 22, 'female', Interest.myInterest2, 'Copenhagen');

var UsersArray = [User1, User2];

console.log(User1)





