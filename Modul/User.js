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

var User1 = new PaymentUser(1, 'Oliver', 'Andersen', 21, 'male',  Interest.myInterest1, 'Copenhagen', Creditcard);
var User2 = new FreeUser(2, 'Ida', 'Jensen', 22, 'female', Interest.myInterest2, 'Copenhagen');

var UsersArray1 = [User1, User2];

var User1updated = new PaymentUser(1, 'Oliver', 'Andersen', 21, 'male',  Interest.myInterest1, 'Odense', Creditcard);

exports.UsersArray = UsersArray1;
exports.User1 = User1;
exports.User2 = User2;
exports.User1updated = User1updated;



