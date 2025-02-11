class Employee{
    public name:string
    private id:number
    private salary:number
    constructor(id:number,name:string,salary:number){
        this.id = id
        this.name = name
        this.salary =salary
    }

    get Id():number{
        return this.id
    }
    get Salary():number{
        return this.salary
    }

    calculateBonus():number{
        return 0
    }
}

class Manager extends Employee{
    public department:string
    constructor(id:number,name:string,salary:number,department:string){
        super(id,name,salary)
        this.department=department
    }

    calculateBonus(): number {
        return this.Salary * 0.50
    }
}

class Engineer extends Employee{
    public language:string
    constructor(id:number,name:string,salary:number,language:string){
        super(id,name,salary)
        this.language=language
    }

    calculateBonus(): number {
        return this.Salary * 0.60
    }

}

class Intern extends Employee{
    public college:string
    constructor(id:number,name:string,salary:number,college:string){
        super(id,name,salary)
        this.college=college
    }

    calculateBonus(): number {
        return this.Salary * 0
    }
}   

const emp1:Employee = new Engineer(1,"Om",30000,"python")
const emp2:Employee = new Manager(2,"Raj",80000,"Sales")
const emp3:Employee = new Intern(3,"Yash",10000,"FAMT")


console.log(`${emp1.name} whose id is ${emp1.Id} and salary is ${emp1.Salary} will get ${emp1.calculateBonus()} bonus`);
console.log(`${emp2.name} whose id is ${emp2.Id} and salary is ${emp2.Salary} will get ${emp2.calculateBonus()} bonus`);
console.log(`${emp3.name} whose id is ${emp3.Id} and salary is ${emp3.Salary} will get ${emp3.calculateBonus()} bonus`);
 