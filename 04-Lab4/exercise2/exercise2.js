/*
let bankAccount = {
    money: 2000,
    deposit(value) {
    this.money += value;
    }
    };
    let myself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
    };
    myself.bankAccount.deposit(3000);
    console.log(myself);
*/
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
