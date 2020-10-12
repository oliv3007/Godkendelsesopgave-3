class User{
    constructor(firstname, lastname, dob, email, gender, location){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.email = email;
        this.gender = gender;
        this.location = location;
    }

    calculateAge() {

        var date_1 = new Date(this.dob);
        var diff_ms = Date.now() - date_1.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
}

class FreeUser extends User{
    constructor(firstname, lastname, dob, email, gender, location){
        super(firstname, lastname, dob, email, gender, location);
    }
}

class PaymentUser extends User{
    constructor(firstname, lastname, dob, email, gender, location, creditcard){
        super(firstname, lastname, dob, email, gender, location);
        this.creditcard = creditcard;
    }
}

class Interest{
    constructor()
}

class Match{
    constructor()
}



var oliver = new FreeUser('Oliver', 'Andersen', [1999, 2, 23], 'oli-hylde@hotmail.com', 'male', 'Copenhagen')

console.log(oliver.location)