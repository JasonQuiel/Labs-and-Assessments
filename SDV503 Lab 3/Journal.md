<h2>Explain with examples Scopes in JavaScript.</h2>

The global scope is a variable declared outside of a any function. These variables can be accessed and alter from anywhere by the code, (They are visible). In the example below const myLuckyNumber is in the global scope since it is not within the if and else statement. The console.log on line 16 would return "My luck number is 12!"

Local scope is variable that are declared within a function. They can only be called or used inside that function. Inside the if and else statement I placed a variable called wrongName!. This let variable only acts within this function and is not visible to any other code. If I did a console.log(wrongName) on line 17 it would return an error of wrongName is defined.

```const myLuckyNumber = ('My luck number is 13!') //Global variable. 
let nameCheck = ("Jason")

if (nameCheck = "Jason") {
    let wrongName = ("wrong name!") //Local variable.
    console.log(nameCheck)
}
else {
    (nameCheck = 'Bob')
    console.log(wrongName)
}
console.log(myLuckyNumber)
```

<h2>What is variable hoisting in JavaScript? Explain with examples.</h2>

Hoisting is the way Javascript moves variables to execute even if the variable is declared after.

```
myLuckyNumber = ('My lucky number is 13!')
var myLuckyNumber
console.log(myLuckyNumber)
```

In the example above the variable myLuckyNumber is declared before var. So before the code is executed it goes through the compiler. JavaScript hoists var myLuckynumber to the top of code. in the global scope. JavaScript reads it like...
```
var myLuckyNumber
myLuckyNumber = ('My lucky number is 13!')
console.log(myLuckyNumber)

If you made an two functions like this you would receive an undefined return.

var myLuckyNumber
console.log(myLuckyNumber)
myLuckyNumber = ('My lucky number is 13!')
```
This is because console.log and var are declarations and hoisted to the top, yet the assignment stays put. var myLuckynumber needs the assignment to not be undefined.
What are the Data Types in JavaScript? And what is the difference between Primitive and Non-Primitive? Explain with examples.

Primitive data types store values but not references. These primitive data types are string, booleans, numbers, and undefined.
```
let a = 5  //primitive number
let b = "this is a string" //primitive string

let c = true //boolean
let d = false //boolean
let e = null //null 
```