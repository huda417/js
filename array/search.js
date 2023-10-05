//search 
//indexOf
//lastIndexOf
// includes



let x = [ 'ali','ahmed','amr','mazen','gamal'] 
console.log(x.indexOf('ali'));  // 0
console.log(x.indexOf('ahmed'));  // 1
console.log(x.indexOf('mazen'));  // 3
//---------------------------------------------------------------------------------------//

let y = [ 'ali','ahmed','amr','mazen','gamal'] 
console.log(y.indexOf('ali',1));  // -1
console.log(y.indexOf('ahmed',3));  // -1
console.log(y.indexOf('mazen',4));  // -1 
console.log(y.indexOf('huda'));   // -1
//(-1) يعني اللي انت تبحث عنه مش موجود
//------------------------------------------------------------------------//

let names = [ 'ali','ahmed','amr','mazen','gamal','ali','ahmed','amr','mazen','gamal'] 
// indexOf start search from beginning
console.log(names.indexOf('ali'));  // 0
console.log(names.indexOf('ahmed'));  // 1
console.log(names.indexOf('mazen'));  // 3
// lastIndexOf  start search from the end
console.log(names.lastIndexOf('ali'));  // 5
console.log(names.lastIndexOf('ahmed'));  // 6
console.log(names.lastIndexOf('mazen'));  // 8
//---------------------------------------------------//
console.log(names.lastIndexOf('huda'));   // -1
console.log(names.lastIndexOf('ali',-6));  // 0
console.log(names.lastIndexOf('ahmed',-5));  // 1
console.log(names.lastIndexOf('mazen',-7));  // 3
//-----------------------------------------------//
console.log(names.includes('huda'));   // false
console.log(names.includes('ali'));  // true
console.log(names.includes('ahmed'));  // true
console.log(names.includes('mazen',-4));  // true
console.log(names.includes('mazen',5));  // true


