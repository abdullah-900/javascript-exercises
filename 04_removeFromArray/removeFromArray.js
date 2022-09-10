const removeFromArray = function(array,value1,value2,value3,value4) {
    var val1=value1
    var val2 =value2
    var val3 =value3
    var val4 =value4
    return array.filter(function(value) { return value!==val1 && value!==val2 && value!==val3 && value!==val4

    })
};

// Do not edit below this line
module.exports = removeFromArray;
