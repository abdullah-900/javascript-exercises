const sumAll = function(num1,num2) {
   
   if (num1<0 || num2<0) return 'ERROR'
   if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR'
   const array=[]
   if (num2>num1) {
      for (i=0;i<num2;i++) {
          array[i]=i+1
       }
       var index1=array.indexOf(num1)
    var index2=array.indexOf(num2)
    
      } else if (num2<num1) {
      for (i=0;i<num1;i++) {
        array [i]=i+1
      }
      var index1=array.indexOf(num2)
    var index2=array.indexOf(num1)
    
    }
const array2=array.slice(index1,index2+1)

 return array2.reduce(function(total,value){return total+value},0)
};

// Do not edit below this line
module.exports = sumAll;
