#! /usr/bin/env.Node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please Guess a number between 1-10",
  },
]);
console.log(answers);

if(answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
}else{
    console.log("You guessed the wrong number.");
}
