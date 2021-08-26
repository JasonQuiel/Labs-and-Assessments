//List of Things to do
// Create a 2D array and create a function with a for loop to change the mines (1) to (X).
// Create another function to add numbers to fields around mines.
// 


const inputGrid = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0]
]

let mines = "x"       
          
    function mineConversion() {    //mineConversion makes the 1 into "x"
    for(let row = 0; row < inputGrid.length; row++) {            
        for(let columns = 0; columns < inputGrid[row].length; columns++) {
            if(inputGrid[row][columns] == 1)     //if the value equals 1 then return the let mines = x
                {inputGrid[row][columns] = mines}
               
        }
    }
    return inputGrid
}

console.log(mineConversion(inputGrid))
let newArr = [...mineConversion()] //passing individual values as arguments.

function addIncrement() {
    for(let row = 0; row < inputGrid.length; row++) {
        for(let columns = 0; columns < inputGrid[row].length; columns++) {
          if(inputGrid[row][columns] === "x") {

            //adding 1 to the 0, 1, 2, rows (3 by 3 Grid!)
            if(row > 0) {
                if (columns > 0 && typeof(inputGrid [row -1][columns - 1]) == "number" ){inputGrid[row -1][columns -1]++}
                if (columns < inputGrid.length - 1 && typeof(inputGrid [row -1][columns + 1]) == "number" ){inputGrid[row -1][columns +1]++}
                if (typeof(inputGrid [row -1][columns]) == "number"){inputGrid[row -1][columns]++}
            }
            //going again to add 1 to the 1, 2, 3 rows.    
                 if (columns > 0 && typeof(inputGrid [row][columns -1]) == "number"){inputGrid[row][columns -1]++};
                 if (columns < inputGrid.length -1 && typeof(inputGrid [row][columns +1]) == "number" ){inputGrid [row][columns + 1]++};
                 
            //Add 1 for 2, 3 rows  
                 if(row < inputGrid.length - 1) {
                     if (typeof(inputGrid [row + 1][columns]) == "number"  ){{inputGrid[row + 1][columns]++}}
                     if (columns < inputGrid.length - 1 && typeof(inputGrid [row + 1][columns - 1]) == "number" ){inputGrid[row +1][columns -1]++}
                     if (columns < inputGrid.length + 1 && typeof(inputGrid [row + 1][columns + 1]) == "number" ){inputGrid[row + 1][columns + 1]++};
                 }
                 
            }
        }
    
    }
return inputGrid    
}
console.table(inputGrid) //Visualization of the inputGrid for mine location.
console.log(addIncrement(inputGrid))  //display the final grid info.

  /* [1, x, 2, 1],  
     [2, 3, x, 2],  
     [3, x, 4, x],  
     [x, x, 3, 1],
  */