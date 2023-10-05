 // //////////////// string 2    



 // repeat  تكرار 


 // length      //    تعدد ليك العناصر والحروف  في النص ولكن  الارقام لا تعد كواحدات منفصله
 //  ولكن لا تنسي ان العد في البرمجه يبداء من الصفر 
 
 
 
 
 //  access

 //  search
 //  slice
 //  split

 let name = " huda "
 console.log(name.repeat(5));
/////////////////////////////////////////////////////////////////////////////////////////
 let title = "super"
 console.log( title.length)  ; // s _ u _ p_ e_ r  =5 

 let nickname = " super ";
 console.log(nickname.length);  //    -  /   super / -    =7     المساحه تحتسب

let x =  100 ;
console.log(x.length); // undefined 
let y =  "17898" ;
console.log(y.length);   // 3
console.log(y[0]);
console.log(y[1]);
console.log(y[2]);
console.log(y[3]);
console.log(y[4]);
console.log(y[5]);
////////////////////////////////////////////
let nam =  "huda" ;
console.log(nam[0]);
console.log(nam[1]);
console.log(nam[2]); 
console.log(nam[3]);
///////////////////////////////////////////
let z = " i like java script ";

// indexOf  start from left 
// LastIndexOf such as  indexOf but LastIndexOf start search from right  
// while indexOf  start from left 

console.log(z.indexOf("k")); //5
console.log(z.indexOf("v"));  //10
console.log(z.indexOf("s"));   //13
console.log(z.indexOf("a"));  // it is  see only one latter   //9
console.log(z.indexOf("a",10));  // it well start from lamter number 10    // = 11

console.log(z.indexOf("script")); //only see one latter in the word   // s = 13 
console.log(z.indexOf("java"));  // j  = 8

console.log(z.lastIndexOf("k"));  //5 
console.log(z.indexOf("i")); // 9 
console.log(z.lastIndexOf("i"));  //

console.log(z.slice(2,7))   //---> like it is cut from 2 to 7 

console.log(z.slice(6))  // cut from 6 to end
// the end number not incloud Ex (2,7) -----> (2,6)


let thenume = "ali - ahmad - gamal - karem"

console.log(thenume.split("a"));  // it is split from every  (a ) من حرف 
console.log(thenume.split(" "));   // it is split from spece  المساحه
console.log(thenume.split('-',2)); 
console.log(thenume.split("m", 2));

