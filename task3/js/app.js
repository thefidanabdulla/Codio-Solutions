
const testArray = [
    { type: 'A', value: 'Tesla' },
    { type: 'A', value: 'GMC' },
    { type: 'B', value: 'KIA' },
    { type: 'C', value: 'Dodge' },
    { type: 'C', value: 'Ford' }
]

let newArray = [];

testArray.forEach((arrayItem, index) => {
    let i = 0;
    let testObj = [];
    for (i; i < testArray.length; i++) {

        if (i !== index && testArray[i].type === arrayItem.type) {
            testObj.push(arrayItem.value, testArray[i].value)
        }
    }

    newArray.push({ ...arrayItem, value: testObj })

})

function filterNewArray(nwArr){
    var resultArray = [];
    nwArr.forEach(function(item){
      var i = resultArray.findIndex(x => x.type == item.type);
      if(i <= -1){
        resultArray.push({type: item.type, value: item.value});
      }
    });
    
    return resultArray;
}

console.log(filterNewArray(newArray))


