#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome To Bank Al Ashfaque");

let myBalance = 20000; //$
let myPin = 7813;
let pinAnswer = await inquirer.prompt(
    [
        {   
            name:"pin",
            message:"Enter your pin code",
            type:"number"
        }
    ]
);

if(pinAnswer.pin === myPin){
    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"Please select option", 
                type:"list",
                choices:["Withdraw","Check Balance","Fast Cash"]
            }
        ]
);

if(operationAns.operation === "Withdraw"){
    let amountAns=await inquirer.prompt(
        [
            {
                name:"amount",
                message:"Enter your amount",
                type:"number",
            }
        ]
     );
     if(amountAns.amount <= myBalance){
        myBalance -= amountAns.amount;
        console.log(`your remaining balance is: ${myBalance}`);
    }

    else{
       console.log("Insufficient Balance");
    }
   }
    else if(operationAns.operation === "Check Balance"){
       console.log(`Your balance is: ${myBalance}`);
   }
    else if(operationAns.operation === "Fast Cash"){
        let FastCashAns = await inquirer.prompt(
             [
                {
                   name:"FastCash",
                   message:"Select your amount you want to fast cash",
                   type:"list",
                   choices:[1000,2000,5000,10000,15000]
                }
             ]
         );
         myBalance -= FastCashAns.FastCash;
         console.log(`Your remainig balance is ${myBalance}`);
            }
        }
        else{
            console.log("Sorry Your Pin Code Is Invalid");
        }
        