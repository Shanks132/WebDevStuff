console.log("Arrays-collections of multiple data type");

let arr = [1,2,3,"never","gonna"];
console.log(arr.length);
//array is mutable so we can change the elements;
arr[0]=6;
console.log(arr);//see 1 is removed and 6 gets placed there
//indices as normal

//type of array is object 
//array methods

// console.log(arr.toString());
//comma seperated string

console.log(arr.join("-"))
//joins the string with given character

console.log(arr.pop());
//returns the popped out element and lst element gone


arr.push(100)
console.log(arr);
//adds an element to the end
//.push returns the length

arr.shift();
console.log(arr);
//pop ka bhai, removes from the first


arr.unshift(69);
console.log(arr);
//push ka bhai, add on the first element

delete arr[3];
console.log(arr);
console.log(arr[3]);
//removes the element mentioned but keeps the space as undefined type


arr[0] = 1; 
console.log(arr.concat([4,5,6,7],["never","gonna","give","you","up"]));
//returns new array doesnt change old ones


console.log(arr.sort());
//sorts alphabetically i.e
// all numbers starting with one together , all starting with 2 together and so on

let num = [1,2,3,4,5];

num.splice(1,1,22,3323,53525252);
//arr.splice(indexToStartFrom,howManyToDelete,ElementsToBeAdded,ElementsToBeAdded,.....)
console.log(num);

num.reverse();
//obvious