// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);

//         }, 3500);
//     });
// }


// console.log('Loading Modules');

// console.log('Do something');



// console.log('Loading data');

// let data = getData();
// data.then((v) => {
//     console.log(data);
//     console.log('process data');
// }); // callback approach

//we can also use an async function to make it so that a function would be working in background

//await cause a program to halt till that line is executed 
// async function getData() {
//     //simulating getting data from a server 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);

//         }, 3500);
//     });
// }
async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await x.json();
    return data;

}

// Example POST method implementation:
async function postData() {
    // Default options are marked with *
    const response = await fetch('https://aniwatchtv.to/tv', {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode:"no-cors",
      headers: {
        "Content-Type": "application/json; charset:UTF-8" 
      },
       // body data type must match "Content-Type" header
    });
    return response; // parses JSON response into native JavaScript objects
  }
  
  

async function main(){
    console.log('Loading Modules');
    console.log('Do something');
    let data = await postData()     ;
    console.log(data);
    console.log('process data');



}
main();


