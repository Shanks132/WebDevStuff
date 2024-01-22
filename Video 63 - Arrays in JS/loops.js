// let arr = [2,3,5,723,23];
// arr.forEach((element,index,arr) => {
//     console.log(element,index,arr);
// });

// for (element of arr){
//     console.log(element);
// }

let object = {a:1,b:2,c:3,d:4};
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element)
        
    }
}