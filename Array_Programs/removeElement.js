//pop()
let arr=[1,2,34,5];
//arr.pop()
//console.log(arr);
//arr.shift()
let result=delete arr[0]
//console.log(result);


//remove element using for loop
let array=[1,2,3,4,5];
let finalArray=[];
let removeEle=4;

for(let i =0;i<array.length;i++) {
    if(array[i] !== removeEle){
        finalArray.push(array[i]);
    }
}
console.log(finalArray);

