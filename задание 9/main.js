//Работа с клcacс
//class Person{
//constructor(name, age){
//    this.name = name;
 //   this.age = age;
//}
//print(){
//    console.log(`Имя: ${this.name}, возраст: ${this.age}`);
//}
//}

//class Employee extends Person{
//    constructor(company){
 //       this.company = company;
 //   }

  //  print(){
       // console.log(`${this.name} работает в ${this.company}`);
  //  }
//}

//const tom = new Person("Harry", 17);
//tom.print();

//const company = new Employee("Россети");
//company.print();
class Person { 
    name; 
    age; 
 
    constructor(pName, pAge) { 
        this.name = pName; 
        this.age = pAge; 
    } 
 
    print() { 
        console.log(this.name); 
    } 
} 
 
 
class Company extends Person { 
    company; 
 
    constructor(e, pName, pAge) { 
        super(pName, pAge); 
        this.company = e; 
    } 
 
    work() { 
        console.log(`${this.name} работает в компании ${this.company}`); 
    } 
} 
 
 
const tom = new Person("Tom", 28); 
const work = new Company("Россети", "Tom", 28); 
 
tom.print(); 
work.work();
