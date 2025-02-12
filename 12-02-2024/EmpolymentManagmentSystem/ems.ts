//import _ from "lodash"
//1
interface IEmployee{
    id:number
    name:string
    position:string
    salary:number
}
//2
interface IManager extends IEmployee{
    teamSize:number
}
//3
class Department{
    private employees:Array<IEmployee>

    constructor(employees:Array<IEmployee>){
        this.employees = employees
    }
    get Employees():IEmployee[]{
        return this.employees
    }

    addEmployee(employee:IEmployee):void{
        this.employees.push(employee)
        console.log(`\n${employee.name} is added to Employess`)
    }
    removeEmployee(employeeId:number):void{
        const index = this.employees.findIndex(({id}:IEmployee)=> id===employeeId )
        if(index!=-1){
            console.log(`\n${this.employees[index].name} is removed from Employess`)
            this.employees.splice(index,1)
        }
        else{
            console.log("\nEmployee not found");
            
        }
    }
    getTotalSalary():number{
        return this.employees.reduce((total:number,{salary}:IEmployee)=>total+=salary,0)
    }

listEmployees():void{
    console.log("\n----Employees-----");
    this.employees.forEach(({name,position,salary}:IEmployee) => console.log(`${name} is ${position} with salary of ₹${salary}`))
    console.log("------------------");
}

}
//5
function updateSalary<T extends IEmployee>(employee:T,newSalary:number){
    const newEmployee = structuredClone(employee)
    newEmployee.salary = newSalary
    return newEmployee
}



const Employees:Array<IEmployee>= [
    { id: 1, name: 'John Doe', position: 'Software Engineer', salary: 80000 },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', salary: 95000 },
    { id: 3, name: 'Sam Johnson', position: 'UI/UX Designer', salary: 72000 },
    { id: 4, name: 'Emily Davis', position: 'Data Scientist', salary: 105000 },
    { id: 5, name: 'Michael Brown', position: 'QA Engineer', salary: 65000 }
  ];


const Dept1 = new Department(Employees)
Dept1.listEmployees()
Dept1.removeEmployee(2)
Dept1.addEmployee({
    id:6, 
    name: 'Himanshu Mehta',
    position:'Backend Devloper',
    salary: 90000 
})

Dept1.listEmployees()

const newEmployee = updateSalary(Dept1.Employees[0],0)

console.log('\n', newEmployee);


Dept1.listEmployees()


//4
class GenericStorage<T>{
    private items:T[]
    constructor(items:T[]){
        this.items=items
    }
    add(item:T):void{
        this.items.push(item)
        console.log("\n",item," is added to Storage")
    }
    remove(item:T):void{
        const removeItemIndex =  this.items.findIndex(genricItem=>genricItem===item)
        if(removeItemIndex!=-1){
            this.items.splice(removeItemIndex,1)
            console.log("\n",item," is removed from Genric Storage");
        }
        else{
            console.log("\n",item," is not present in Genric Storage");
        }
    }
    getAll(){
        console.log("\n","----Storage Items----");
        this.items.forEach(item=>console.log(item))
        console.log("---------------------");
        return this.items
    }
}


const numberStorage = new GenericStorage([5,6,8,3,2,9,0])
const employeeStorage = new GenericStorage(Employees)


numberStorage.getAll()
numberStorage.add(9)
numberStorage.getAll()
numberStorage.remove(1)
numberStorage.getAll()

employeeStorage.getAll()
employeeStorage.add({id:7,name:"Ritesh Mehta",position:"Intern",salary:10000})
employeeStorage.getAll()
employeeStorage.remove({id:7,name:"Ritesh Mehta",position:"Intern",salary:10000})
employeeStorage.getAll()
