const ftoc = function(f) {
  const temp= (f-32) * (5/9)
const rounded = Math.round(temp * 10)/10
return rounded;
};

const ctof = function(c) {
  const temp = c *(9/5) +32
  const rounded = Math.round(temp * 10)/10
return rounded
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
