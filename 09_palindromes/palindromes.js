const _ = require('lodash');
const palindromes = function (string) {
const array=string.split('')
const array1=[];
array1.push(array)
array.reverse()
if (+_.isEqual(array,array1)) {
    return false

}else  {return true}
};

// Do not edit below this line
module.exports = palindromes;
