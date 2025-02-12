//3
var Department = /** @class */ (function () {
    function Department(employees) {
        this.employees = employees;
    }
    Object.defineProperty(Department.prototype, "Employees", {
        get: function () {
            return this.employees;
        },
        enumerable: false,
        configurable: true
    });
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
        console.log("\n".concat(employee.name, " is added to Employess"));
    };
    Department.prototype.removeEmployee = function (employeeId) {
        var index = this.employees.findIndex(function (_a) {
            var id = _a.id;
            return id === employeeId;
        });
        if (index != -1) {
            console.log("\n".concat(this.employees[index].name, " is removed from Employess"));
            this.employees.splice(index, 1);
        }
        else {
            console.log("\nEmployee not found");
        }
    };
    Department.prototype.getTotalSalary = function () {
        return this.employees.reduce(function (total, _a) {
            var salary = _a.salary;
            return total += salary;
        }, 0);
    };
    Department.prototype.listEmployees = function () {
        console.log("\n----Employees-----");
        this.employees.forEach(function (_a) {
            var name = _a.name, position = _a.position, salary = _a.salary;
            return console.log("".concat(name, " is ").concat(position, " with salary of \u20B9").concat(salary));
        });
        console.log("------------------");
    };
    return Department;
}());
//5
function updateSalary(employee, newSalary) {
    var newEmployee = structuredClone(employee);
    newEmployee.salary = newSalary;
    return newEmployee;
}
var Employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', salary: 80000 },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', salary: 95000 },
    { id: 3, name: 'Sam Johnson', position: 'UI/UX Designer', salary: 72000 },
    { id: 4, name: 'Emily Davis', position: 'Data Scientist', salary: 105000 },
    { id: 5, name: 'Michael Brown', position: 'QA Engineer', salary: 65000 }
];
var Dept1 = new Department(Employees);
Dept1.listEmployees();
Dept1.removeEmployee(2);
Dept1.addEmployee({
    id: 6,
    name: 'Himanshu Mehta',
    position: 'Backend Devloper',
    salary: 90000
});
Dept1.listEmployees();
var newEmployee = updateSalary(Dept1.Employees[0], 0);
console.log('\n', newEmployee);
Dept1.listEmployees();
//4
var GenericStorage = /** @class */ (function () {
    function GenericStorage(items) {
        this.items = items;
    }
    GenericStorage.prototype.add = function (item) {
        this.items.push(item);
        console.log("\n", item, " is added to Storage");
    };
    GenericStorage.prototype.remove = function (item) {
        var removeItemIndex = this.items.findIndex(function (genricItem) { return genricItem === item; });
        if (removeItemIndex != -1) {
            this.items.splice(removeItemIndex, 1);
            console.log("\n", item, " is removed from Genric Storage");
        }
        else {
            console.log("\n", item, " is not present in Genric Storage");
        }
    };
    GenericStorage.prototype.getAll = function () {
        console.log("\n", "----Storage Items----");
        this.items.forEach(function (item) { return console.log(item, "is"); });
        console.log("---------------------");
        return this.items;
    };
    return GenericStorage;
}());
var numberStorage = new GenericStorage([5, 6, 8, 3, 2, 9, 0]);
var employeeStorage = new GenericStorage(Employees);
numberStorage.getAll();
numberStorage.add(9);
numberStorage.getAll();
numberStorage.remove(1);
numberStorage.getAll();
employeeStorage.getAll();
employeeStorage.add({ id: 7, name: "Ritesh Mehta", position: "Intern", salary: 10000 });
employeeStorage.getAll();
employeeStorage.remove({ id: 7, name: "Ritesh Mehta", position: "Intern", salary: 10000 });
employeeStorage.getAll();
