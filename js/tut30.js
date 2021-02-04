console.log('hello world');

class Employee {
  constructor(givenName , givenExperience, givenCompany){
      this.name = givenName;
      this.experience = givenExperience;
      this.comany = givenCompany;
  }

   slogan(){
      return `${this.comany} is my company and i am having ${this.experience} yrs of experience`;
  }

  joiningYear(){
    return 2020 - this.experience; 
  }

  static add(a,b){
      return a+b;
  }
}

class Programmer extends Employee{
    constructor(givenName,givenExperience,givenCompany,language,github){
        super(givenName,givenCompany,givenExperience);
      this.language = language;
      this.github = github;
    }

    favouriteLanguage(){
        if(this.language == 'python'){
            return 'python';
        }
        else{
            return 'javaScript';
        }
        static multiply(a,b){
            return a*b;
        }
    }
}
// em1 = new Employee('riyaz',2,'Infosys');
// console.log(em1);
// console.log(em1.slogan());
// console.log(Employee.add(34,6));
riyaz = new Programmer('faiyaz',23,'TCS','python');
console.log(riyaz);
console.log(riyaz.favouriteLanguage());
console.log(Programmer.multiply(3,3));