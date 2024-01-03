//  find the maximum value in array using loops
let array = [1, 5, 78, 32, 79, 85, 56];

//here 85 is the maximum value so let assume first element of array is maximum
let maximumValue = array[0];

for (let i = 1; i < array.length; i++) {
  //check if current array value is greater than maximumValue
  if (array[i] > maximumValue) {
    //store maximum value in array[i]
    maximumValue = array[i];
  }
}
//console.log(maximumValue);

//using Math.max.apply
let arr = [1, 5, 78, 32, 79, 85, 56];
// apply method invoke the math.max
let maxVal = Math.max.apply(null, arr);
//console.log(maxVal);

//using spread operator
let highestVal = Math.max(...arr);
//console.log(highestVal);

//using reduce method
let bigValue = arr.reduce(
  (previous, current) => (current > previous ? current : previous),
  arr[0]
);
console.log(bigValue);


// FIND THE SUM OF ALL ElEMENET IN AN ARRAY
let array1= [2,3,4,5,6,7,8,9,10,11];
// assume sum of all array elements is zero
let sum = 0;
 
for(let i = 0; i < array1.length; i++){
  //add current element to array with sum
  sum += array1[i];
}

console.log(sum);

//by using function 
function  sumOFAllElement(arr){
  let sum1=0;
  for(let i = 0; i < arr.length;i++){
    sum1 += arr[i];
  }
  return sum1;
}
let array2 = [4,5,6]
console.log(sumOFAllElement(array2));


//using reduce method
function sumArr(arr) {
  return arr.reduce((previous, current) => previous + current);
}
let array3 = [4, 5, 6, 7];
console.log(sumArr(array3));