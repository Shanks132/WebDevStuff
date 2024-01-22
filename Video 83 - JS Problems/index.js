/*
The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

Solution:


let students = ["ram", "shubh","chinnaswamy Muthuswamy","Venugopal","Iyer","Rick Astley","Hitori", "Gotoh"];

let houseWise = [];



let studentHouse = students.map((stu)=>{
    if(stu.length<6){
        return "gryfindor";
    }
    else if (stu.length<8){
        return "Huffelpuff";
    }
    else if( stu.length<12){
        return "Ravenclaw";
    }
    else{
        return "Slytherin";
    }
})
let obj = {};
for(let i = 0; i<students.length;i++){
    obj[students[i]]=studentHouse[i];
}
console.log(obj);

*/

/*

The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

Solution:


let arr1 = [4,6,2,9,3,52,5,2,32,6];

let arr2 = [];
let i = 0;
let j = 0
while(i<arr1.length){
    if(!(arr1[i]*2 in arr2)){
        arr2[j] = arr1[i]*2;
        j++;
    }
    i++;
}
console.log(arr2);
*/
/*
The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

Solution:
function stringReverse(str1){
    let strRev = "";
    for (let i = str1.length-1; i >= 0; i--) {
        strRev+=str1[i];
    }
    console.log(str1+strRev);
}
*/

/*
 The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

Solution

let charFlag = false;
let upperFlag = false;
let lowerFlag = false;
let digitFlag = false;

let count = 0;
function passwordChecker(pass){
    
    for(let i =0; i<pass.length;i++){
        count++;
        if(pass.charCodeAt(i)>=97 && pass.charCodeAt(i)<=123 ){
            lowerFlag = true;
        }
        
        if(pass.charCodeAt(i)>=65 && pass.charCodeAt(i)<=90 ){
            upperFlag = true;
        }
        if(pass.charCodeAt(i)>=48 && pass.charCodeAt(i)<=57 ){
            digitFlag = true;
        }
        if(count>=8){
            charFlag = true ;
        }
        if(lowerFlag && upperFlag && digitFlag && charFlag){
            return true;
        }

    }
    return false;
}

while(true){
    // would have had a prompt here, but browser me daalne aalas ho rha
    let askPass = "PotatoBoi29";
    if(passwordChecker(askPass)){
        console.log("good password");
        break;
    }
}
*/

/*
The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

Solution:
*/

let sum =0;
let arrIn=[];
for(element in arrIn){

}