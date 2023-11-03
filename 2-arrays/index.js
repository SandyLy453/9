/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 *  Initialise an array, called university of vancouver, that includes 3 items: UBC, SFU, and UVIC.
 *  Initialise another array that called university of toronto. There are also 3 items included in this array:University of Toronto, York University, and Toronto Metropolitan University.
 *  Then concatenate this two arrays with university of vancouver then university of toronto.
 */


var universityOfVancouver = ["UBC", "SFU", "UVIC"];

var universityOfToronto = ["University of Toronto", "York University", "Toronto Metropolitan University"];

console.log(universityOfVancouver.concat(universityOfToronto));






/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 *  Intitialise a 2D array called information that is 2 by 4. The array will include those item:
 * ["Sandy", "green"],
 * ["Ruby", "blue"],
 * ["Vince", "black"],
 * ["Tran", "pink"]
 * 
 * console log the array, then use the array to console log a sentence "This is _Tran_ of team _pink_."
 */

var information = [
    ["Sandy", "green"],
    ["Ruby", "blue"],
    ["Vince", "black"],
    ["Tran", "pink"],
];

console.log(information);

console.log(`This is ` + information[3][0] + " of team " + information[3][1] + ".");



