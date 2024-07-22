const dotenv = require('dotenv');
const express = require('express');
dotenv.config();

const app = express();

const prompt = require('prompt-sync')();

const username = prompt('What is your name? ');

console.log(`Your name is ${username}`);

const options = [
    "Create a customer",
    "View all customers",
    "Update a customer",
    "Delete a customer",
    "Quit"
  ];

console.log("What would you like to do?")

options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });
const choice = prompt("Number of action to run: ");

const choiceIndex = parseInt(choice) - 1;

if (choiceIndex >= 0 && choiceIndex < options.length) {
  console.log(`You chose: ${options[choiceIndex]}`);
} else {
  console.log("Invalid ");
}
