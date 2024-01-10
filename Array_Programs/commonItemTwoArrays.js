let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array2 = [2, 14, 5, 16, 88, 4, 7];

let array3 = [];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (array[i] == array2[j]) {
      array3.push(array[i]);
    }
  }
}
console.log(array3);
