class Payment{
    constructor(amount,date){
        this.amount = amount
        this.date = date
    }
    processPayment() {
        return `Processed Payment of ${this.amount} on ${this.date}.`;
    }
}

class CreditCardPayment extends Payment{
    constructor(cardNumber,amount,date){
        super(amount,date)
        this.#cardNumber = cardNumber
    }
    #cardNumber;
    getCardNumber(){
        return this.#cardNumber
    }
    setCardNumber(cardNumber){
        this.#cardNumber = cardNumber
    }
}

class PayPalPayment extends Payment{
    constructor(accountNumber,amount,date){
        super(amount,date)
        this.#accountNumber = accountNumber
    }
    #accountNumber;
    getCardNumber(){
        return this.#accountNumber
    }
    setCardNumber(cardNumber){
        this.#accountNumber = cardNumber
    }
}

class CryptoPayment extends Payment{
    constructor(walletAddress,amount,date){
        super(amount,date)
        this.#walletAddress = walletAddress
    }
    #walletAddress;
    getwalletAddress(){
        return this.#walletAddress
    }
    setwalletAddress(walletAddress){
        this.#walletAddress = walletAddress
    }
}
const payment1 = new CreditCardPayment("123456789012",4000,new Date(2025,2,4))
const payment2 = new PayPalPayment("9876543210",5000,new Date(2025,2,5))
const payment3 = new CryptoPayment("56566542323",2000,new Date(2025,2,6))


console.log(payment1.processPayment())
console.log(payment2.processPayment())
console.log(payment3.processPayment())