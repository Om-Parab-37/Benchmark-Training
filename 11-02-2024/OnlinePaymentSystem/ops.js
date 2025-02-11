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
var Payment = /** @class */ (function () {
    function Payment(amount, date) {
        this.amount = amount;
        this.date = date;
    }
    Payment.prototype.processPayment = function () {
        return "Processed Payment of ".concat(this.amount, " on ").concat(this.date);
    };
    return Payment;
}());
var CreditCardPayment = /** @class */ (function (_super) {
    __extends(CreditCardPayment, _super);
    function CreditCardPayment(cardNumber, amount, date) {
        var _this = _super.call(this, amount, date) || this;
        _this.cardNumber = cardNumber;
        return _this;
    }
    Object.defineProperty(CreditCardPayment.prototype, "CardNumber", {
        get: function () {
            return this.cardNumber;
        },
        set: function (cardNumber) {
            this.cardNumber = cardNumber;
        },
        enumerable: false,
        configurable: true
    });
    return CreditCardPayment;
}(Payment));
var PayPalPayment = /** @class */ (function (_super) {
    __extends(PayPalPayment, _super);
    function PayPalPayment(accountNumber, amount, date) {
        var _this = _super.call(this, amount, date) || this;
        _this.accountNumber = accountNumber;
        return _this;
    }
    Object.defineProperty(PayPalPayment.prototype, "AccountNumber", {
        get: function () {
            return this.accountNumber;
        },
        set: function (accountNumber) {
            this.accountNumber = accountNumber;
        },
        enumerable: false,
        configurable: true
    });
    return PayPalPayment;
}(Payment));
var CryptoPayment = /** @class */ (function (_super) {
    __extends(CryptoPayment, _super);
    function CryptoPayment(walletAddress, amount, date) {
        var _this = _super.call(this, amount, date) || this;
        _this.walletAddress = walletAddress;
        return _this;
    }
    Object.defineProperty(CryptoPayment.prototype, "WalletAddress", {
        get: function () {
            return this.walletAddress;
        },
        set: function (walletAddress) {
            this.walletAddress = walletAddress;
        },
        enumerable: false,
        configurable: true
    });
    return CryptoPayment;
}(Payment));
var payment1 = new CreditCardPayment(123456789012, 4000, new Date(2025, 2, 4));
var payment2 = new PayPalPayment(9876543210, 5000, new Date(2025, 2, 5));
var payment3 = new CryptoPayment(56566542323, 2000, new Date(2025, 2, 6));
console.log(payment1.processPayment(), "with card number : ".concat(payment1.CardNumber));
console.log(payment2.processPayment(), "with account number : ".concat(payment2.AccountNumber));
console.log(payment3.processPayment(), "with wallet Address : ".concat(payment3.WalletAddress));
