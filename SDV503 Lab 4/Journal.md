Q: Explain the JavaScript switch statement and provide an example with your explanation.

Switch statements start at the top of the code with an expression it wants to evaluate. This expression is compared against case clauses which compare without type conversion (===). The expression is compared against all the case clauses moving down the list. luckyNumber is going to be evaluated against case 11, 12, then 13. Each case clause has a break in between cases to prevent the code from executing the entire switch and only returning the desired expression. If the expression and the case clause match the console.log('My lucky number is 13') will print. If no case clauses match default: console.log('Not your lucky day.') will execute.
```
const luckyNumber = 13 
switch (luckyNumber) {  
    case 11:
        console.log('My lucky number is 11')
            break
    case 12:
        console.log('My lucky number is 12')
            break
    case 13:
        console.log('My lucky number is 13')
            break
default:
    console.log('Not your luck day.')
```
Q: What are the advantages & disadvantages of the JavaScript switch statements?

<b>Advantages of the JavaScript switch statement.</b>
<ul>
<li>One advantage of a switch statement is that it is regarded as being a tidy and readable layout for code. This clean code allows easy maintenance and for code modification.</li>   
<li>With switch statement you are able to have multiple criteria cases to evaluate an expression.
    Users choose the case to execute.</li>
<br>
<b>Disadvantage of switch statements.</b>
<ul>
<li>switch statements only evaluates integers or characters.</li>

<li>Switches can only process one expression at a time.</li>
</ul>
<br>
<b>Q: What is the difference between if/else and switch statements?</b>

| Switch  | If/else |
|---|---|
| Multiple cases to choose from, and users decide which to execute.  |Based on the result of the expression, if true else false.   |
| Single expression only and evaluates and check only on equality.  |Single or multiple expression and evaluates and checks both equality and logical expressions.   |
|Only evaluates integer or character.   |Evaluates integer, floating-point, character, pointer, or Boolean.   |
| Switch will execute one case after another until break or default statement is executed.  |If or else block will execute based on the conditions.   |
|Switch expression is not found the default expression will execute.   |If statement is untrue then else statement executes.   |
|Compares values of multiple cases if matched the block of statements are executed.   |Conditions are either true or false
Editing and maintaining is easy.   |Editing if/else statements can create problems.
|Considered quicker to compile if multiple choices.   |Slower execute if multiple if/else choices.   |
<br>
<b>Q: Explain JavaScript loops with an example.

Loops are functions that are used to repeat multiple statements. Loops are constructed using three statements, which are initialize counter, test counter, and increment counter. These are primary components for a loop.
```
for(b = 0; b < 5; b++) {            
        console.log('hold on to your butts!')
}
```

(b = 0; This set b to zero before the loop starts. b < 5; This sets the test condition b must be less than 5. b++) This sets the increment counter.

The for loop starts with b has the value of 0, javascript then looks at the test conditions that b is less than 5. The program adds 1 with b++. The program looks back at b = 1 says b is still less than 5 and adds 1 through b++. This process continues until the value of gets to 4 the program will print out ('hold on to your butts!') 5 times. (0 t0 4)
Q: what are the types of loops in javascript. Give one example for each type?

For loop, for of loop, for in loop and while loop
```
//For loop
for(b = 0; b < 5; b++) {            
        console.log('hold on to your butts!')
}

//for of loop
let string = 'Jason'
for (let value of string)
console.log(value)

J
a
s
o
n
```
```
//for in
const mail = {
    Address: 123, 
    Street: 'fake', 
    Postal:7020
}
for (let prop in mail ) {
   console.log(`mail.${prop} = ${mail[prop]}`); 
}
```
```
//while loops

let r = 1
    while (r < 2) {
        r++
        console.log(r)
    }
```    
