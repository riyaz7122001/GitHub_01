console.log("hello world");

const proto = {

    slogan : function(){
        return 'this company is best';
    },
    changeName : function(newName){
        this.name = newName ;
    }
} 
// this creates riyaz object
 const riyaz = Object.create(proto);
 riyaz.name = "Riyaz";
 riyaz.role = "Web Developer";
//  riyaz.company = prompt('enter tour company name');
 riyaz.changeName('faiyaz');
 console.log(riyaz);

 //constructor of employee 
 function employee(name , salary , experience){
     this.name = name;
     this.salary = salary;
     this.experience = experience;
 }

 //slogan
 employee.prototype.slogan = function (){
     return `this company is best. regards, ${this.name}`;
 }
 //creating a object for employee

 let harry = new employee('riyaz',100000,3)
 console.log(harry.slogan())

 // Programmer 
  function Programmer(name,salary,experience,language){
      employee.call(this,name,salary,experience);
      this.language = language;
// manually select the constructor 
 Programmer.prototype.constructor = Programmer;
  }
  // inherit prototype
 Programmer.prototype= Object.create(employee.prototype);
  
  let rohan =  new Programmer('rohan',2,0,'javascript');
  console.log(rohan);