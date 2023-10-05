// تحويل الارقام الي نصوص 


// string ---> any value is string 

console.log(typeof String(44 )) ;    //string
console.log(typeof String(100 )) ;    // string


let x = 9 ;

console.log(typeof String( x )) ;   //string  

//  هناك طريقه اخرى لكنها غير مفضله  
// لازم تضع نقطتين بين الرقم والعنصر حتي لا يحدث خطا 



console.log( typeof 10..toString()) ; // this way right  (..) 
//console.log(10.tostring( )) ;  // this way is wrong  (.)




  // if you are used this way you can put (.) to write code right 
let y = 99
console.log( typeof y.toString()) ;
  

