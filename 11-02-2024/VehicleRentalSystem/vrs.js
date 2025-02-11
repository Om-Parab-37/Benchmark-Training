var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, rentPricePerDay) {
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }
    Vehicle.prototype.calculateRentalCost = function (days) {
        return this.rentPricePerDay * days;
    };
    Vehicle.prototype.displayInfo = function () {
        return "Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Rent per Day: ").concat(this.rentPricePerDay, ", rental cost for 5 days ").concat(this.calculateRentalCost(5));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.calculateRentalCost = function (days) {
        return _super.prototype.calculateRentalCost.call(this, days) * 1.3;
    };
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bike.prototype.calculateRentalCost = function (days) {
        return _super.prototype.calculateRentalCost.call(this, days) * 1.1;
    };
    return Bike;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Truck.prototype.calculateRentalCost = function (days) {
        return _super.prototype.calculateRentalCost.call(this, days) * 1.2;
    };
    return Truck;
}(Vehicle));
var vehicle1 = new Bike("TVS", "Jupiter", 1000);
var vehicle2 = new Car("Hyundai", "I10", 2500);
var vehicle3 = new Truck("Mahindra", "ape", 2000);
console.log(vehicle1.displayInfo());
console.log(vehicle2.displayInfo());
console.log(vehicle3.displayInfo());
