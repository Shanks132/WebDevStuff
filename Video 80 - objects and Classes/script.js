// let obj1 = 
// {
//     a:1,
//     b:"Sk"
// };

// let animal = { eats:true};
// let rabbit = {jumps:true};

// rabbit.__proto__ = animal;


class Animal{
    
    constructor(name){
        console.log('Object created');
        this.name=name
    }//always runs when this object created

    eats() {
        console.log('munch');
    }
    breath(){
        console.log('hmmph');
    }

}
let bunny = new Animal("bunny");
console.log(bunny);
    

class Sher extends Animal{
    roar(){
        console.log('Sher ki phatt gyii hai');    
    }
    constructor(name){  
        super(name);
        console.log('Sher aa gaya');        
    }
    eats(){ // overriding
        super.eats();
        console.log('Sher hiran khayega');
    }   

}
let l1 = new Sher("Shera");
console.log(l1);


class Dude{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length<4){
            console.log('invalid name');
            return ;
        }
        this._name = value;
        return ;
    }   
}
let d1 = new Dude("John");
console.log(d1.name);

console.log(d1);
d1.name = 'ram';
console.log(d1);


