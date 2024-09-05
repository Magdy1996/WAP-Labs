/**
 * Exercise 3: Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5,  and
contains letter ‘a’.
 */


const getNewArray = function (arr){

return arr.filter(str => str.length >= 5 && str.includes('a'));

}

console.log(getNewArray(["apple", "pear", "banana", "kiwi", "grape"])); 
console.log(getNewArray(["cat", "dog", "elephant", "bird"])); 