
let a = prompt("Ek Number de");
let b = prompt("Ek aurNumber de");
let sum = parseInt(a) + parseInt(b);

if (a == NaN || b == NaN) {
    throw SyntaxError("BROOOOO NUMBER DAALO")
}
function main() {
    try {
        let x =1 ;
        console.log(sum * x)
        return true;
    } catch (error) {
        console.log(error);
        console.log(error.name);
        console.log(error.log);
        console.log(error.message);
        return false;
    }
    finally {//this will be executed despite the return statement being above
        //wont happen so if there was no finally block  
        console.log("DB Connection terminated")
    }
}
console.log(main());