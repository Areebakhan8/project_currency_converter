#! /usr/bin/env node
import inquirer from "inquirer";

const currency:any = {
  USD: 1, //base curreny
  EUR: 0.922,
  AFN: 71.225,
  AMD: 387.97,
  LBP: 89.5,
  CNY: 7.233,
  INR: 83.273,
  PKR: 277.73,
};

let userInput = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EUR", "AFN", "AMD", "LBP", "CNY", "INR", "PKR"],
  },
  {
    name: "to",
    message: "Enter To Currency",
    type: "list",
    choices: ["USD", "EUR", "AFN", "AMD", "LBP", "CNY", "INR", "PKR"],
  },
  {
    name:"amount",
    message:"Enter Your Amount",
    type:"number"
  }
]);

let fromCurrency = currency[userInput.from]
let toCurrency = currency[userInput.to]
let amount = userInput.amount
let baseAmount = amount/fromCurrency //usd base currency
let convertedAmount = baseAmount*toCurrency
console.log (convertedAmount)
