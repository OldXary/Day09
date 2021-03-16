function myDoWhyle() {
    var myNumbers = '0';
    var i = 1;
    
    do {
        myNumbers += ',' + i;
        i++;
    } while(i < 10);
    
    return myNumbers;
}

console.log(myDoWhyle());

module.exports = myDoWhyle;