function myForLoop1() {
    var evenNumbers = '0';
    
    for(var i = 1; i <= 8; i++) {
        if(i % 2 == 0) {
            evenNumbers += ',' + i;
        }
    }
    
    return evenNumbers;
}

function myForLoop2() {
    var evenInverseNumbers = '8';
    for (var i = 7; i >= 0; i--) {
        if(i % 2 == 0) {
            evenInverseNumbers += "," + i;
        }
    }
    
    
    return evenInverseNumbers;
}

console.log(myForLoop2());