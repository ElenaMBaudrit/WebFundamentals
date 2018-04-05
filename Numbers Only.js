// Make a function that copies an array, ONLY accepting the items that are numbers.
// IT SHOULD RETURN A NEW ARRAY
// var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// // newArray is [1, -3, 0.5]
// HINT
// Use typeof to determine type (ex: typeof 24 === "number" would be true)

function numOnly(arr){
    var newArray=[];
    for (var i=0; i<=arr.length; i++){
        if (typeof arr [i]==="number"){
            newArray.push (arr[i]);
        }
    }
    return newArray;
}
var numbersOnly=[1, "apple", -3, "orange", 0.5];
console.log(numOnly(numbersOnly));
    
