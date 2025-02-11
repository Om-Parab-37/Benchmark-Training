class Payment{
    amount:number
    date:Date    
    constructor(amount:number,date:Date){
        this.amount = amount
        this.date = date
    }
    processPayment():string {
        return `Processed Payment of ${this.amount} on ${this.date}`;
    }
}

class CreditCardPayment extends Payment{
    private cardNumber:number
    constructor(cardNumber:number,amount:number,date:Date){
        super(amount,date)
        this.cardNumber = cardNumber
    }
    get CardNumber(){
        return this.cardNumber
    }
    set CardNumber(cardNumber){
        this.cardNumber = cardNumber
    }
}

class PayPalPayment extends Payment{
    private accountNumber:number
    constructor(accountNumber:number,amount:number,date:Date){
        super(amount,date)
        this.accountNumber = accountNumber
    }
    get AccountNumber(){
        return this.accountNumber
    }
    set AccountNumber(accountNumber){
        this.accountNumber = accountNumber
    }
}

class CryptoPayment extends Payment{
    private walletAddress:number
    constructor(walletAddress:number,amount:number,date:Date){
        super(amount,date)
        this.walletAddress = walletAddress
    }
    get WalletAddress(){
        return this.walletAddress
    }
    set WalletAddress(walletAddress:number){
        this.walletAddress = walletAddress
    }
}
const payment1 = new CreditCardPayment(123456789012,4000,new Date(2025,2,4))
const payment2 = new PayPalPayment(9876543210,5000,new Date(2025,2,5))
const payment3 = new CryptoPayment(56566542323,2000,new Date(2025,2,6))


console.log(payment1.processPayment(),`with card number : ${payment1.CardNumber}`)
console.log(payment2.processPayment(),`with account number : ${payment2.AccountNumber}`)
console.log(payment3.processPayment(),`with wallet Address : ${payment3.WalletAddress}`)