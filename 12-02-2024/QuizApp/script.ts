import { questions } from "./Quiz.js"
import { Quiz } from "./Quiz.js"

document.addEventListener("DOMContentLoaded",()=>{

    const QuestionEl = document.getElementById("question")
    const OptionListEl = document.getElementById("options")
    const btnNext = document.getElementById("next-btn")
    const btnSubmit = document.getElementById("submit-btn")
    const btnPrevious = document.getElementById("previous-btn")
    const resultsEl = document.querySelector(".results")
    const scoreEl = document.getElementById("score")
    const resultMessageEl = document.querySelector(".result-message")
    const questionOptionsContainer=document.querySelector(".question-options")
    


    const myQuiz = new Quiz(questions)

    const loadQuestion:(index:number)=>void = (index)=>{
        myQuiz.CurrentQuestionIndex = index
        const {question,isSubmitted,choices,selectionIndex} = myQuiz.Questions[index]
        QuestionEl!.textContent= question
        OptionListEl!.querySelectorAll("label").forEach((element,idx) => {
            element.textContent = choices[idx]
        })
        OptionListEl!.querySelectorAll("input").forEach((element:HTMLInputElement,idx) => {
            element.checked = false
            element.disabled = false
            if(isSubmitted){
                element.disabled = true
            }
            element.addEventListener("click",(e)=>{
                myQuiz.SelectionIndex = Number(element.id[8])
            })
        if(selectionIndex!==-1){
            if(OptionListEl) ((OptionListEl.querySelectorAll("input"))[selectionIndex]).checked = true
        }
        })
    }
    const submitAnswer:()=>void=()=>{
        myQuiz.checkAnswer()
        if(myQuiz.CurrentQuestionIndex===myQuiz.Questions.length-1){
            showResult()
            return
        }
        loadQuestion(++myQuiz.CurrentQuestionIndex)
        console.log("submitted");
        
    }
    const showResult = ()=>{
        if(myQuiz.NumberOfSubmittedQuestions < myQuiz.Questions.length){
            alert("Please Submit all the Questions")
            return
        }
        scoreEl!.textContent = `${myQuiz.Score}/${myQuiz.Questions.length*10}`
        resultMessageEl!.textContent = myQuiz.Score < myQuiz.Questions.length*10/2 ? "Tumse Na Ho Payega 😓" : "7 Crore 🥳"
        questionOptionsContainer?.classList.add("d-none")
        resultsEl?.classList.remove("d-none")
    }

    const moveToNextQuestion:()=>void=()=>{
        if(myQuiz.CurrentQuestionIndex!==myQuiz.Questions.length-1){
        loadQuestion(++myQuiz.CurrentQuestionIndex)}
        console.log("next");
    }
    const moveToPreviousQuestion:()=>void=()=>{
        if(myQuiz.CurrentQuestionIndex!==0){
        loadQuestion(--myQuiz.CurrentQuestionIndex)}
        console.log("previos");
    }

    btnSubmit?.addEventListener("click",submitAnswer)
    btnNext?.addEventListener("click",moveToNextQuestion)
    btnPrevious?.addEventListener("click",moveToPreviousQuestion)
    loadQuestion(0)










})