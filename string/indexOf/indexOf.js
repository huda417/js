// search 

let name = " i love java script " ; 
         //"012345678910111213141516171819"

console.log(name.indexOf("a")) ;//9
console.log(name.indexOf("l")) ; //3
console.log(name.indexOf("v")) ; //5
console.log(name.indexOf("t")) ; //18
///////////////////////////////////////////////////////////////////
console.log(name.lastIndexOf("a")); //11
console.log(name.lastIndexOf("l")) ; //3
console.log(name.lastIndexOf("v"));  //10
console.log(name.lastIndexOf("t")) ; //18
 ///////////////////////////////////////////////////////////////////
 console.log(name.indexOf("a",10))//11   تمشي تصاعدى من تحت الى فوق 

 console.log(name.lastIndexOf("a",10))//9    تمشي تنازلى من فوق الي تحت 

 //////////////////////////////////////////////////////////////////////////
 //in cludes
 console.log(name.includes("v"));   // true 
console.log(name.includes("a",9)) ;// true 


 console.log(name.includes("z"));   // false 
////////////////////////////
console.log(name.lastIndexOf("z")); //  -1
console.log(name.indexOf("z")) ;//  -1 
console.log(name.startsWith("i",1)) ; //true 

//  do letter (i) in number 1
console.log(name.endsWith("j",9 ));   //true
console.log(name.endsWith("j",12 ));   //false







