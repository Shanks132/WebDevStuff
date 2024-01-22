console.log("STrING TUT");
let a = "strings tutorial";

console.log(console.log(a[0]));

//if you go out of bounds it will just say undefined  

let friend = "harry";
let name1 = "Ram Bhai";
console.log(name1 +" is " + friend+"'s"+" friend");

//template literals
console.log(`${name1} is ${friend}'s friend`);
//when variables are inserted like this its called string interpolation


//also \ works the same as good old escape sequence

// some common str methods 
name1.length; // its a property so no brackets required
name1.toUpperCase();//its a method so paranthesis required
name1.toLowerCase();


name1.slice(2,5);
//chartacter no.2 to 4. No end mentioned goes to end

console.log(name1.replace("Bh","77"));
//in case of multiple occurences then the 1st occurence is changed
console.log(name1);

console.log(name1.concat(friend,"new"));
console.log(name1);

console.log(name1.trim());
//removes whitespaces trailing and leading not the ones in the middle
console.log(name1);

//strings are immutable so the string is stuck as it was declared

