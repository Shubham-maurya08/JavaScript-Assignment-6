// Q1. Write a JavaScript function to check whether an input is an array or not.

// Q2. Write a JavaScript program that prints the elements of the following array.Note : Use nested for loops.

// Q3. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array. 
// Sample array : array1 = [1,0,2,3,4]; array2 = [3,5,6,7,8,13];
// Expected Output : [4, 5, 8, 10, 12, 13]

// Q4. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample Array: myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// Q5. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
// Note: Complete the Assignment and Update on the Sheet.

//Question:1
// function check(arr){
//     if(Array.isArray(arr)){
//       return true;
//     }else{
//       return false;
//     }
//   }
//   console.log(check([1,2,3,4,5]));

//question:2
// let arr = [1,2,3,4,5,6,"Apple", "Ball", "cat"];
// console.log(arr);

//Solution:3
// const array1 = [1,0,2,3,4,0];
// const array2 = [3,5,6,7,8,13];
// let sum = array1.map((x, i) => {      //inside function - element/endex/array
//     return x + array2[i];
// });
// console.log(sum);

//Question:4
// let myColor = ["Red", "Green", "White", "Black"];
// let res = myColor.join("+");
// console.log(res);

//Question:5
// let array = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// let res = array.sort((a,b) => a-b);
// console.log(res);



