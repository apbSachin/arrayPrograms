// find the maximum value in array using loops
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
