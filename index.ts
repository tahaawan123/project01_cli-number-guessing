#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 8 + 1);
const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please Guess  Number Between 1-8:",
  },
]);
if (answers.userGuessedNumber === randomNumber) {
  console.log(" Congratulations! You Guessed  right Number");
} else {
  console.log("You Guessed  Wrong Number");
}
