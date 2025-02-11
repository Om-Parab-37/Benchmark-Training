class Vehicle{
    public brand:string
    public model:string
    public rentPricePerDay:number
    constructor(brand:string, model:string, rentPricePerDay:number) {
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }

    calculateRentalCost(days:number):number {
        return this.rentPricePerDay * days;
    }

    displayInfo():string {
        return `Brand: ${this.brand}, Model: ${this.model}, Rent per Day: ${this.rentPricePerDay}, rental cost for 5 days ${this.calculateRentalCost(5)}`;
    }
}

class Car extends Vehicle {
    calculateRentalCost(days:number):number{
        return super.calculateRentalCost(days) * 1.3;
    }
}

class Bike extends Vehicle {
    calculateRentalCost(days:number):number{
        return super.calculateRentalCost(days) * 1.1;
    }
}

class Truck extends Vehicle {
    calculateRentalCost(days:number):number {
        return super.calculateRentalCost(days) * 1.2;
    }
}
const vehicle1 = new Bike("TVS","Jupiter",1000)
const vehicle2 = new Car("Hyundai","I10",2500)
const vehicle3 = new Truck("Mahindra","ape",2000)


console.log(vehicle1.displayInfo())
console.log(vehicle2.displayInfo())
console.log(vehicle3.displayInfo()) 

