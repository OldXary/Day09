function inverseWhile() {
    var fiveNumbers = '5';
    var i = 4;
    
    while(i >= 0) {
        fiveNumbers += ',' + i;
        i--;
    }
    
    return fiveNumbers;
}

console.log(inverseWhile());

module.exports = inverseWhile;