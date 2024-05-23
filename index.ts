#! /usr/bin/env node
import inquirer from "inquirer";
// let todos = ["Apple", "Mango", "Orange"]
let todos = [];
let condition = true;

while(condition)
{ 
  let todoQuestions  = await inquirer.prompt(
[
    {
        name: "firstQuestion",
        type: "input",
        message: "what would you like to add in your todos:"
},
    {
        name: "secondQuestion",
        type: "confirm",
        message: "would you like to add more in your todos?",
        default: "true"
},
]
);
 //  push method to add an element in the end of an arry
todos.push(todoQuestions.firstQuestion);
console.log(todos)
condition = todoQuestions.secondQuestion
todos.push("orange");
console.log(todos);
// pop method to remove an element in the end of an arry
todos.pop();
console.log(todos);
 // shift method to remove an element in the start of an arry
todos.shift();
console.log(todos);
 // unshift method to add an element in the start of an arry
 todos.unshift("kiwi");
 console.log(todos);
}