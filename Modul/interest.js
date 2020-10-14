class Interest{
    constructor(hobby1, hobby2, hobby3){
    this.hobby1 = hobby1;
    this.hobby2 = hobby2;
    this.hobby3 = hobby3;
    }
}

var oliverint = new Interest('pizza', 'fishing', 'swimming');
var idaint = new Interest('pizza', 'painting', 'handball');

exports.myInterest1 = [oliverint];
exports.myInterest2 = [idaint];