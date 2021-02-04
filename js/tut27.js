console.log('we are at tutorial 27');

let car  = {
    name: 'alto 210',
    topSpeed : 55,
    run :  function(){
        return 'car is running';
    }
}
console.log(car);
 
function getCar(name , topSpeed){
    this.name = name;
    this.speed = topSpeed;
    this.run = function(){
        return `my ${thsi.name} is running`;
        } 
    this.analyze = function(){
        return `this car is slower than ${this.speed} km/hr than mercerdez`; 
    }
}
let car1 = new getCar('Audi',75);
let car2 = new getCar('BMW',100);
console.log(car1,car2);
