console.log('hello world');

let obj = {

    name : 'Riyaz',
    channel : 'code with riyaz',
    add : 'earth'
}
 function myobj(givenName){
     this.name = givenName;
 }


 let obj2 = new myobj('faiyaz');
 console.log(obj2);

 obj.prototype.getName = function(){
    return this.name;
 }

 obj.prototype.setName = function(newName){
     this.name = newName;
 }