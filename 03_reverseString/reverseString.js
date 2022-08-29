const reverseString = function(word) {
const array=word.split('');
const key =array.reverse();
const wo = key.slice(0,key.length)
return wo.join('');
};

// Do not edit below this line
module.exports = reverseString;
