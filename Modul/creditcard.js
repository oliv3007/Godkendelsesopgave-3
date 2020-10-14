class Creditcard{
    constructor(cardholdername, cardnumber, expiredate, cvc){
        this.cardholdername = cardholdername;
        this.cardnumber = cardnumber;
        this.expiredate = expiredate;
        this.cvc = cvc;
    }
}
var credit = new Creditcard('1234 5678 9012 3456', "02/23", "123")

exports.Creditcard = Object.values(credit)