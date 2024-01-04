//ADD TWO NUMBERS
function add(num1, num2) {
  return num1 + num2;
}
// console.log(add(5, 5));


//odd or even
function evenOrOdd(number){
    if(number%2==0){
        return `even number`
    }else{
        return `odd number`
    }
}
// console.log(evenOrOdd(5));

//number is +,- or zero
function positiveNegative(number) {
  if (number > 0) {
    return `positive number`;
  } else if (number < 0) {
    return `negative number`;
  } else {
    return `number is zero`;
  }
}
// console.log(positiveNegative(5));

//swap two variable
let var1=20;
let var2=30;
 temp=var1; //temp=20
var2=temp;
// console.log(var2);
// console.log(var1);

//calculate natural number
let naturalNumber=[1,2,3,4,5,6,7,8,9,10,11,12];
let sum=0;
for(let i=0; i<naturalNumber.length; i++){
    sum +=naturalNumber[i];
}
// console.log(sum);

//even or odd
function evenOdd(n){
    if(n % 2 == 0){
        return `given number is even`
    }else{
        return `given number is odd`
    }
}
// console.log(evenOdd(5));

//area of triangle
function areaOfTriangle(base,height){
    return 1/2*base*height
}
// console.log(areaOfTriangle(2,2));

//palindrome
function palindrome(name){
    let removeUnexpected = name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let clearValue = removeUnexpected.split('').reverse().join('');
     return clearValue = removeUnexpected;
}
let value="747";
console.log(palindrome(value));


//remove the dublivate
// let arr=[1,1,2,2,3,4,4,5,5];
function removeDublicate(arr){
    let unique=[];
    for (let i =0;i<arr.length;i++){
        if(!unique.includes(arr[i])) unique.push(arr[i]);
    }
    return unique
}
let arr=[1,1,2,2,3,4,4,5,5,6];
//console.log(removeDublicate(arr));
let result= [...new Set(arr)]
console.log(result)
