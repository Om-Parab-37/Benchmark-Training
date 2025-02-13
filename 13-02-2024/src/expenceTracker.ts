export enum Category {
    Rent = "Rent",
    Food = "Food",
    Transport = "Transport",
    StudyMaterials = "StudyMaterials",
    Entertainment = "Entertainment",
    //PocketMoney = "PocketMoney",
    Gift = "Gift"
  }

export interface IExpense{
    amount:number
    category: Category
    date: Date
    description?:string
}

export class ExpenseTrackerUtils{
    private expenses: IExpense[] = []
    private localStorageKey: string
    constructor(){
        this.localStorageKey = "expenses"
        this.loadFromLocalStorage()
    }

    loadFromLocalStorage(){
        const localExpenses = localStorage.getItem(this.localStorageKey)
        if(localExpenses)
        this.expenses = JSON.parse(localExpenses)
        console.log("All expenses are loaded");
    
    }

    saveToLocalStorage(){
        localStorage.setItem(this.localStorageKey,JSON.stringify(this.expenses))
        console.log("Saved to local storage");
        
    }

    addExpense(expense:IExpense){
        this.expenses.push(expense)
        this.saveToLocalStorage()
        console.log(expense," added to expenses");
        
    }

    getAllExpenses(givenCategory=""):IExpense[]{
        const expenses = this.expenses.sort((a,b)=> new Date(b.date).getTime()-new Date(a.date).getTime())
        if(givenCategory){
            return expenses.filter(({category})=>givenCategory===category)    
        }
        return expenses
    }

    



}