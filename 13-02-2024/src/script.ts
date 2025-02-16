import {ExpenseTrackerUtils, IExpense, Category} from "./expenceTracker.js"

document.addEventListener("DOMContentLoaded", () => {
    const inpAmountEl = document.getElementById("inpAmount")
    const inpDateEl = document.getElementById("inpDate")
    const inpDescriptionEl = document.getElementById("inpDescription")
    const inpCategoryEl = document.getElementById("inpCategory")
    const categoryFilterEl = document.getElementById("categoryFilter")
    const expenseHistoryEl = document.getElementById("expenseHistory")
    const expenseFormEl = document.getElementById("expenseForm")
    const myExpenseTools = new ExpenseTrackerUtils()

    const loadCategoriesToDropdown=() => {
        Object.values(Category).forEach(element => {
            const option1El = document.createElement("option")
            const option2El = document.createElement("option")
            option1El.value = element
            option2El.value = element
            option1El.textContent = element
            option2El.textContent = element
            inpCategoryEl?.appendChild(option1El)
            categoryFilterEl?.appendChild(option2El)
            });
    }
    // const optionEl = inpCategoryEl?.appendChild
    const loadExpenses = (category="") => {
        //myExpenseTools.loadFromLocalStorage()
        expenseHistoryEl?.replaceChildren()
        myExpenseTools.getAllExpenses(category).forEach(({amount, category, date, description}) => {
            const expenseEl = document.createElement("li")
            expenseEl.className = "card shadow my-2"
            expenseEl.innerHTML = 
            `<div class="card expense-card p-3">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                    <h5 class="expense-category">${category}</h5>
                    <p class="text-muted mb-1">${description}</p>
                    <p class="mb-0"><small>Date: ${dateToReadableFormat(date)}</small></p>
                </div>
                <div class="expense-amount">₹${amount}</div>
            </div>`
            expenseHistoryEl?.appendChild(expenseEl)
            
            })
        //console.log("All expenses are Loaded");

    }
    const dateToReadableFormat=(date:Date)=>{
        return new Date(date).toLocaleString('en-US', {
            weekday: 'long', 
            year: 'numeric', 
            month: 'long',   
            day: 'numeric',  
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit', 
            hour12: true  
        });
    }

    const handleSubmitExpense = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const expense: IExpense = {
            amount: (formData.get("amount")),
            date: (new Date(formData.get("date"))),
            description: (formData.get("description")),
            category: (formData.get("category"))
        }
        console.log(expense);

        myExpenseTools.addExpense(expense)
        categoryFilterEl.value = expense.category
        loadExpenses(categoryFilterEl.value)
        alert(`Expense of ₹${expense.amount} is added to ${expense.category} category`)

    }

    expenseFormEl?.addEventListener("submit", (e) => handleSubmitExpense(e))
    categoryFilterEl?.addEventListener("change",(e)=>{loadExpenses(e.target.value)})
    loadCategoriesToDropdown()
    loadExpenses()
    //console.log(myExpenseTools.getAllExpenses());

})