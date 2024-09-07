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

type BankAccount = {
    money: number;
    deposit: (value: number) => void;
};

type Person = {
    name: string;
    bankAccount: BankAccount;
    hobbies: string[];
};

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: Person = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);

 
