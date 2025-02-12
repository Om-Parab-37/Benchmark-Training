export interface IQuestion{
    question:string
    choices:string[]
    correctAnswer:string
    selectionIndex:number
    isSubmitted:boolean
    
}
export class Quiz{
    private questions: IQuestion[]
    private currentQuestionIndex: number
    private score:number
    private numberOfSubmittedQuestions:number
    constructor(questions:IQuestion[]){
        this.questions = questions
        this.currentQuestionIndex = 0
        this.score = 0
        this.numberOfSubmittedQuestions = 0

    }
    get Questions(){
        return this.questions
    }
    get Score(){
        return this.score
    }
    set Score(score:number){
        this.score = score
    }
    get CurrentQuestionIndex():number{
        return this.currentQuestionIndex
    }
    get NumberOfSubmittedQuestions (){
        return this.numberOfSubmittedQuestions
    }

    set CurrentQuestionIndex(index){
        this.currentQuestionIndex = index
    }

    set SelectionIndex(index:number){
        this.questions[this.currentQuestionIndex].selectionIndex=index
    }
    

    checkAnswer():void{
        const question =this.questions[this.currentQuestionIndex]
        if(question.selectionIndex===-1){
            console.log("Please Select an answer");
            return
        }
        if(!question.isSubmitted){
        const correctAnswerIndex = question.choices.findIndex(choice=>choice===question.correctAnswer)
        if(question.selectionIndex===correctAnswerIndex){
            this.Score+=10
        }
        question.isSubmitted = true
        this.numberOfSubmittedQuestions+=1
    }
        else{
            console.log("Question is Already submitted")
        }
    }

    

}

export const questions = [
    {
        "question": "Which of these is NOT a prime number?",
        "choices": ["2", "3", "4", "5"],
        "correctAnswer": "4",
        "selectionIndex": -1,
        "isSubmitted": false
    },
    {
        "question": "If a plane crashes on the border of the US and Canada, where do they bury the survivors?",
        "choices": ["US", "Canada", "Nowhere", "Both countries"],
        "correctAnswer": "Nowhere",
        "selectionIndex": -1,
        "isSubmitted": false
    },
    {
        "question": "Which of the following is not a part of the body?",
        "choices": ["Brain", "Heart", "Spine", "Turtle"],
        "correctAnswer": "Turtle",
        "selectionIndex": -1,
        "isSubmitted": false
    },
    {
        "question": "Which is heavier, a ton of feathers or a ton of bricks?",
        "choices": ["Feathers", "Bricks", "Both weigh the same", "Neither"],
        "correctAnswer": "Both weigh the same",
        "selectionIndex": -1,
        "isSubmitted": false
    },
    {
        "question": "How many months have 28 days?",
        "choices": ["1", "2", "12", "6"],
        "correctAnswer": "12",
        "selectionIndex": -1,
        "isSubmitted": false
    },
    // {
    //     "question": "If you have 5 apples and you take away 3, how many do you have?",
    //     "choices": ["3", "5", "2", "None"],
    //     "correctAnswer": "3",
    //     "selectionIndex": -1,
    //     "isSubmitted": false
    // },
    // {
    //     "question": "Which is the largest ocean in the world?",
    //     "choices": ["Atlantic", "Indian", "Pacific", "Arctic"],
    //     "correctAnswer": "Pacific",
    //     "selectionIndex": -1,
    //     "isSubmitted": false
    // }
]

