//all possible ways to reverse array:
/**
    1.reverse()
    2.for()
    3.unshift()
    4.reduce()
    5.map()
 */

//reverse()
let array=[1,2,3,4,6];
//console.log(array.reverse());

//unshift()
let result=array.reduce((acc,curr)=>{
    acc.unshift(curr);
    return acc;
},[])
console.log(result);
