//TooDoo list.
//Area of Rectangle is length x Width
//Create function for each problem


function areaRectangle(l, w) {
    let areaRectangle
        if (typeof l === 'number' && typeof w === 'number') {
             areaRectangle = l * w
                 return areaRectangle
} else {
    return "not a valid Number"  
            }  
}
console.log(areaRectangle(40, 20))


function sunOfABeach(array) {
    let res = null       
        for (let i = 0; i < array.length; i++) {
            res = res + array[i] ** 3  
}
return res
}
console.log(sunOfABeach([1, 5, 9]))