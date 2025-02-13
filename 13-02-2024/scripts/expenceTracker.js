export var Category;
(function (Category) {
    Category["Rent"] = "Rent";
    Category["Food"] = "Food";
    Category["Transport"] = "Transport";
    Category["StudyMaterials"] = "StudyMaterials";
    Category["Entertainment"] = "Entertainment";
    //PocketMoney = "PocketMoney",
    Category["Gift"] = "Gift";
})(Category || (Category = {}));
export class ExpenseTrackerUtils {
    constructor() {
        this.expenses = [];
        this.localStorageKey = "expenses";
        this.loadFromLocalStorage();
    }
    loadFromLocalStorage() {
        const localExpenses = localStorage.getItem(this.localStorageKey);
        if (localExpenses)
            this.expenses = JSON.parse(localExpenses);
        console.log("All expenses are loaded");
    }
    saveToLocalStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.expenses));
        console.log("Saved to local storage");
    }
    addExpense(expense) {
        this.expenses.push(expense);
        this.saveToLocalStorage();
        console.log(expense, " added to expenses");
    }
    getAllExpenses(givenCategory = "") {
        const expenses = this.expenses.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        if (givenCategory) {
            return expenses.filter(({ category }) => givenCategory === category);
        }
        return expenses;
    }
}
