
// splice (start , count , add ,add ,.....)
//start  البدايه 
// count  عدد العناصر اللي عايز تحذفها 
// add  الاضافه 

//////////////////////////////
 // slice ( start , end )   تقطيغ 


let names = ['aa','bb','cc','dd']
names.splice(0,1);
console.log(names);   // removed 0 aa


let letter = ['aa','bb','cc','dd']
letter.splice(1,1);
console.log( letter);   // removed 1 bb
////////////////////////////////////////////////////////////////////////////////////

let x = ['huda','gamal','ahmed','mazen']
//x.splice(0,1,'moon and sun');  //removed 0 huda and put 'moon and sun' 
//x.splice(0,0,'sun is up'); // put sun is up  and not remove 0 
//x.splice(1,0,'sun goes down'); //put sun goes down in 1  and not remved any thing
x.splice(1,1,'sun set'); //put sun goes down in 1  and not remved any thing
console.log(x); 
