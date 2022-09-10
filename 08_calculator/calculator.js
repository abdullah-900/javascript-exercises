const add =(a,b)=>{
  return a+b;

};

const subtract = (a,b)=> {
  return a-b;
	
};

const sum = (arr)=> {
  return  arr.reduce((total,value)=> total+value,0)
	
};

const multiply = (arr)=> {
    return arr.reduce((total,value)=> total*value,1)

};

const power = (a,b)=> {
	return Math.pow(a,b);
};

const factorial = (a)=> {
  const arr=[];
	for (i = 0; i <= a; i++) {
    arr[i] = i
  }
  arr.splice(0, 1)
  return arr.reduce((total,value)=> total*value,1)
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
