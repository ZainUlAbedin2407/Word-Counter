#! /usr/bin/env node

// this shebang command is used to tell the system that this file is a Node.JS script


// import the "inquirer" module, which is a CLI for Node.JS

import inquirer from "inquirer"

// Declare a constant "answers" and assign it to the result of inquirer.prompt function

const answers : {
    Sentence : string
} = await inquirer.prompt ([
    {
        name : "Sentence",
        type : "input",
        message : "Enter your Sentence to Count the words"
    }
])

const words = answers.Sentence.trim().split(" ")

// Print the Array of words to the console
 

console.log(words)

// print the length of words of sentence
console.log(`The number of words in your sentence is ${words.length}`)