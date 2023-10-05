 //   slice    تقطيع 

 let  name =  "i love java script"


 console.log(name.slice());

 console.log(name.substr());
 console.log(name.substring());





 
 console.log(name.slice());
 console.log(name.slice(2,6));  //love 
  //  لا يمكن اعطاها قيمه بالسالبsubstring من اخر حرف يمكن بدا العد بالسالب -1  -2 وهكذا ولكن 
  console.log(name.slice( -6, -4)); // sc
 console.log(name.slice(-6)); // script
 console.log(name.substring(-6,-4)); //  لن تعطيك اى قيمه 
 console.log(name.substring(6,4)); //  تعطيك قيمه لن الارقام مش بالسالب 
 console.log(name.substring());



 console.log(name.slice(2,6)); // love 

 console.log(name.substring(2,6)); // love 

 console.log(name.substr(2,6)); // love j

 // substr   تعد لك 6 بعد الرقم 2 

 



 





