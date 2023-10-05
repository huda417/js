
// splice

let y =['lion','elephant','tigar','lizard','monkey']
y.splice(0,1)
                           // removed 0 lion 
console.log(y)  //  ['elephant','tigar', 'lizard', 'monkey']


let list =['lion','elephant','tigar','lizard','monkey']
list.splice(0,3)
  // removed 0 1 2    lion   bbelephant   tigar 
console.log(list);  //  ['lizard', 'monkey']


let list1 =['lion','elephant','tigar','lizard','monkey']
list1.splice(1,4);  // 0 lion ---remove------> 1 elephant 2 tiger  3 lizard   4 monkey
  console.log(list1);
  //////////////////////////////////////////////
  let list2 =['lion','elephant','tigar','lizard','monkey']
  list2.splice(1,1);  // 1 elephant
  //(4) ['lion', 'tigar', 'lizard', 'monkey']
 
  console.log(list2);



  let nn =['lion','elephant','tigar','lizard','monkey']
    nn.splice(1,2)               //removed 1 elephant   2 tiger 
    console.log(nn);


    let s=['lion','elephant','tigar','lizard','monkey']
    s.splice(1,3)
  
     console.log(s)    //removed 1 elephant   2 tiger   3 lizerd

     
      
    
      


