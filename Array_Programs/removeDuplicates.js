//USING new Set() method

let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6, "Sachin", "Sachin"];
//collection of unique values automatically removing any duplicates.
let removeDublicate = [...new Set(arr)];
console.log(removeDublicate);



//USING FOR LOOP
// Define a function named removeDuplicatesWithForLoop that takes an array as a parameter.
function removeDuplicatesWithForLoop(arr) {
    // Create an empty array named 'unique' to store elements without duplicates.
    const unique = [];

    // Start a for loop that iterates over each index of the input array.
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element at index i is not already in the 'unique' array.
        // If unique includes arr[i], the condition evaluates to true, meaning the element is already in the unique array.
        if (!unique.includes(arr[i])) {
            // If the element is not in 'unique', add it to the 'unique' array.
            unique.push(arr[i]);
        }
    }

    // After the loop completes, return the 'unique' array without duplicate elements.
    return unique;
}

// Create an array named 'array6' with some duplicate elements.
const array6 = [1, 2, 2, 3, 4, 4, 5];

// Call the removeDuplicatesWithForLoop function with 'array6' as an argument.
// The result, which is an array without duplicates, is stored in 'uniqueArray6'.
const uniqueArray6 = removeDuplicatesWithForLoop(array6);

// Log the result to the console, showing the array without duplicates.
console.log(uniqueArray6);  // Output: [1, 2, 3, 4, 5]


//USING FOR EACH LOOP
function removeDublicatesWithForEachLoop(arr){
    let unique=[];
    arr.forEach((item)=>{
        if(!unique.includes(item)){
            unique.push(item);
        }
    })
    return unique;
}
let arrays=[1,4,4,5,5,6,6,7,7,8,8,8,8,];
console.log(removeDublicatesWithForEachLoop(arrays)); 