const sumAll = function(num1,num2) {
    if (num1>0 && num2>0) {

    }else if (num1==="" || num2==="") {
     }else 
     { return 'ERROR'} 
    
    const array=[];
    for(i=0;i<=num2;i++){
 array [i] = i
    }
    const index =array.indexOf (num1)
    const last=array.slice (index)

 const totl=last.reduce(function(first,total){
    return first+total;
})
return totl;
};

// Do not edit below this line
module.exports = sumAll;
