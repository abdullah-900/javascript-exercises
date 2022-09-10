const findTheOldest = function(people) {
    
  const n=people.filter( function(element) {
    return element.yearOfDeath-element.yearOfBirth>=40
 })
 const m= n.map((element)=> {return element.name})
 return m [0]
}
// Do not edit below this line
module.exports = findTheOldest;
