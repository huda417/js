




let objects = [1,2,,3,'ahmad',true,undefined, null, [1,2,3,4]]

 console.log(objects);    // [1, 2, empty, 3, 'ahmad', true, undefined, null, Array(4)]
 
      // array in side of array 


      let ARRA = [1,2,3,[4,5,6]]
      console.log(ARRA [3][1]);  //5
      let numbers = [0,1,2,3,[4,5,6]]
      console.log(numbers[0]); //0
      console.log(numbers[4][0]) ;//4
      console.log(numbers[4][1]) ;//5
      console.log(numbers[4][2]) ;//6


      //////////////////////////////////////////////////////\
      
      
      let x = [0,1,2,[3,3,3,3]]
      console.log(x[3]);  //[3, 3, 3, 3]
      let A = [0,[1,2],[3,4],[5,6]]
      console.log(A[0]);  // 0
      console.log(A[1]);// [1,2]
      console.log(A[2]); // [3,4]
      console.log(A[3]); //[5,6]
      console.log(A[1][1]);  //2
      console.log(A[3][1]);  //6

      /////////////////////
      
      let y = [0,[1,2,[3,4]]]

      console.log(y[1][2]);   // [3,4]
      console.log(y[1][2][0]);   // 3
      console.log(y[1][2][1]);   // 4
      //////////////////////////////////////////////////
       let z = [0,1,2,3]
       z[0]='A'
       z[1]='B'
       z[2]='C'
       z[3]='D'
       console.log(z)
       // [ A,B,C,D]








