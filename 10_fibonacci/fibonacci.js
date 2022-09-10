const fibonacci = function(number) {
    if (number <0) return 'OOPS'
    const array=[1,1]
    for (i=2;i<100;i++) {
        array[i]=array[i-1]+array[i-2]

    }
return array[number-1]
};

// Do not edit below this line
module.exports = fibonacci;
