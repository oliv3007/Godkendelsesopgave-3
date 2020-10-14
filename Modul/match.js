const { match } = require('assert');
const Interest = require('./Interest');

class Match{
    constructor(matchid){
        this.matchid = matchid;
    }
}

const intersection = Interest.myInterest1.filter(element => Interest.myInterest2.includes(element));

if (intersection.length >= 1) {
   var matched = 'You have matched';
}
else {
    var matched = 'You have not matched';
}

exports.matched = matched;
