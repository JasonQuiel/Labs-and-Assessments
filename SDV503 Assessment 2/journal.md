Assessment 2 - Minesweeper

The first step of the project was to created a nested array (2D Array) that held number values. I needed this array to stay the same and not let any aspect of the code change it so I made it a const.

const inputGrid = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0]
]

Declared a global let variable for the mine with the string value "x", I made other global variables such as an empty array to push the final modified array into but I didn't continue along that thought process.

The first logical function to make was turning the number 1 inside the arrays to a string value of "x". I started by using two four loops. The 1st loop and 2nd loop go through the rows and columns of the array. I decided to the .length in the condition of the loop even though I knew how long the array are.

 function mineConversion() {    
    for(let row = 0; row < inputGrid.length; row++) {            
        for(let columns = 0; columns < inputGrid[row].length; columns++

As the loops went through the array the if statement set down some conditions. The first part is If the cell of the array has a 1, it will be replaced by the mines variable which is x.

    if(inputGrid[row][columns] == 1)     
        {inputGrid[row][columns] = mines}

I decided to to store the mineConversion output into an array called newArr. I decided to do this because I figured if something was to be a problem with my code later on, putting the outcome of that function into an new array might be useful.

let newArr = [...mineConversion()]

I also used the spread operator since if I needed to call upon the array, it would allow me to add new elements into the array. I never needed it since the second function worked.

Writing the second function for me was very difficult on a few points. I started making different solutions to try and increment the cells surrounding the x. I knew I needed for loops to run through test conditions again. I kept trying different methods of multiple for loops( I had 6 loops once). I received this error "maximum call stack size exceeded" which was me just calling the same function many time.

Only after a fellow student pointed out that my 1st function could be easily modified to perform this task. By just {inputGrid[row -1][columns +1]. I also failed to understand how to interpret the array data at first. I was able to console.log in the first function the location of the mines. Yet it made no sense to me. I then found console.table on mdn web docs.

console.table(inputGrid)

Seeing the table structure I was able to think and physically see the location of the mines. So I started by just making two for loops to run through the rows and columns again. Yet made the if statement say if === (strict equals) to ignore the string value "x".

    for(let row = 0; row < inputGrid.length; row++) {
        for(let columns = 0; columns < inputGrid[row].length; columns++) {
          if(inputGrid[row][columns] === "x") {

I then started looking for examples of how I could increment. I knew that each "x" was surrounded by a 3 x 3 and that if the condition looked for cells beyond the grid for x on the edge, the program would break.

  //adding 1 to the 0, 1, 2, rows (3 by 3 Grid!)
            if(row > 0) {
                if (columns > 0 && typeof(inputGrid [row -1][columns - 1]) == "number" ){inputGrid[row -1][columns -1]++}
               

The three sets of if statements (8 in total) were broken up to help me visualize what area of the grid I was working on. At this point it was just trial and error on a lot of these if statements and looking at online examples. Only then did I realize that typeof and ensuring strict === for "number".

I had my problems getting all three sets of if statements to work, I perviously had a condition in the 1st set of three if statements that prevented the 3rd set of if statements to execute. Debugging the if statements wasn't easy and pretty much my understanding of how this works is really flimsy now even after getting people to explain why these changes made the code work.