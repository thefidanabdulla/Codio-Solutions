let testArray = ['alma', 'albalı', 'alça']


function prefix(prefixArray) {

    let var1;
    let var2;

    let i = 0;

    while (prefixArray[0][i] && prefixArray.every(w => w[i] === prefixArray[0][i])) {
        i++;
    }
    var1 = (prefixArray[0].substr(0, i));


    while (prefixArray[0][i] && prefixArray.every(w => w[i] !== prefixArray[0][i])) {
        i++;
    }
    var2 = (prefixArray[0].substr(0, i));



    var1 ? console.log(var1) : console.log(false)
    
}

prefix(testArray)


