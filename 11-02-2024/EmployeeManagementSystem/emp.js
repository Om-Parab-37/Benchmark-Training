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
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Object.defineProperty(Employee.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Salary", {
        get: function () {
            return this.salary;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.calculateBonus = function () {
        return 0;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, salary, department) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.department = department;
        return _this;
    }
    Manager.prototype.calculateBonus = function () {
        return this.Salary * 0.50;
    };
    return Manager;
}(Employee));
var Engineer = /** @class */ (function (_super) {
    __extends(Engineer, _super);
    function Engineer(id, name, salary, language) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.language = language;
        return _this;
    }
    Engineer.prototype.calculateBonus = function () {
        return this.Salary * 0.60;
    };
    return Engineer;
}(Employee));
var Intern = /** @class */ (function (_super) {
    __extends(Intern, _super);
    function Intern(id, name, salary, college) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.college = college;
        return _this;
    }
    Intern.prototype.calculateBonus = function () {
        return this.Salary * 0;
    };
    return Intern;
}(Employee));
var emp1 = new Engineer(1, "Om", 30000, "python");
var emp2 = new Manager(2, "Raj", 80000, "Sales");
var emp3 = new Intern(3, "Yash", 10000, "FAMT");
console.log("".concat(emp1.name, " whose id is ").concat(emp1.Id, " and salary is ").concat(emp1.Salary, " will get ").concat(emp1.calculateBonus(), " bonus"));
console.log("".concat(emp2.name, " whose id is ").concat(emp2.Id, " and salary is ").concat(emp2.Salary, " will get ").concat(emp2.calculateBonus(), " bonus"));
console.log("".concat(emp3.name, " whose id is ").concat(emp3.Id, " and salary is ").concat(emp3.Salary, " will get ").concat(emp3.calculateBonus(), " bonus"));
