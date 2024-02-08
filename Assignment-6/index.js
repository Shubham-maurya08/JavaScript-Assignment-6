//Solution:1
// let arr = [1,2,3,4,5];
// let res = arr.reduce((a,b) => a*b);
// console.log(res);

//Solution:2
// let arr = [1,2,3,4,5];
// let res = arr.reduce((a,b) => a+b);
// console.log(res);

//Solution:3
// let arr = [3,3,1,2];
// let count = 0;
// for(let i=0; i< arr.length; i++){
//     if(arr[i] === 3){
//         count++;
//     }
// }
// console.log(count);

//Solution:4
// const arr = [1, 2, 3, 4, 5, 6, 7];
// let B = [];
// let even = arr.filter((x) => x % 2 == 0).reduce((accum, curr) => {
//     return accum + curr;
// });
// B[0] = even;
// let odd = arr.filter((x) => x % 2 != 0).reduce((accum, curr) => {
//     return accum + curr;
// });
// B[1] = odd;
// console.log(B);

//Solution:5
// function find_num(){
//     let arr = [1,2,3,4,5];

//     for(let i=0; i < arr.length; i++){
//         if(arr[i] === 2){
//             return "YES";
//         }
//     }
//     return "NO";
// }
// console.log(find_num());  

//Solution:6
// var ages = [11, 23, 3, 45, 72, 68];
// var res = ages.filter(x => x > 18);
// console.log(res);

//Solution:7
// let array = [1,2,3,4,5];
// let result = array.map(x => x + 1);
// console.log(array.length +" "+ result);

//Solution:8
// function  isAllPass(){
//     let arr = [13,89,45,98,67,45,54];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] >= 32){
//             return "YES";
//         }
//         return "NO"
//     }
// }
// console.log( isAllPass());

//Solution:9
// function find_samecolor_tshirt(){
//     let arr = [3,2,4,1,2,3];
//     let count = 0;

//     for(let i=0; i < arr.length; i++){
//         if(arr[i] != arr[i]){
//             count++
//         }
//     }
// }
// console.log(find_samecolor_tshirt(count));

// let arr = [3,2,4,1,2,3,7];
// let count = 0;

// for(let i=0; i < arr.length; i++){
//     if(arr[i] !== arr[0]){
//         count++;
//     }
// }
// console.log(count);

//Solution:10
// let arr = [66,33,11,44,66,22,77];
// let result = Math.min(...arr) +" "+Math.max(...arr);
// console.log(result);