class Employee {
    constructor(name,id,salary){
    this.name = name
    this.id = id
    this.#salary = salary
}
#salary;

getSalary(){
    return this.#salary
}

setSalary(salary){
    this.#salary = salary
}
calculateBonus(){
    return
}

}
class Manager extends Employee{
    constructor(name,id,salary){
        super(name,id,salary)
    }
    
    calculateBonus(){
        return this.getSalary()*0.4
    }
}
class Intern extends Employee{
    constructor(name,id,salary){
        super(name,id,salary)
    }
    
    calculateBonus(){
        return this.getSalary()*0
    }
}
class Engineer extends Employee{
    constructor(name,id,salary){
        super(name,id,salary)
    }
    
    calculateBonus(){
        return this.getSalary()*0.3
    }
}

const emp1 = new Engineer("Om","001",30000)
const emp2 = new Manager("Raj","002",80000)
const emp3 = new Intern("Yash","003",10000)


console.log(`${emp1.name} whose id is ${emp1.id} and salary is ${emp1.getSalary()} will get ${emp1.calculateBonus()} bonus`);
console.log(`${emp2.name} whose id is ${emp2.id} and salary is ${emp2.getSalary()} will get ${emp2.calculateBonus()} bonus`);
console.log(`${emp3.name} whose id is ${emp3.id} and salary is ${emp3.getSalary()} will get ${emp3.calculateBonus()} bonus`);
 