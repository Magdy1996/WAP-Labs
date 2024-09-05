/*
Exercise 2:  Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20.


*/

function sum(arr) {
    return arr.filter(elem => elem > 20)
    .reduce((acc, elem) => acc + elem,0);

}

console.log(sum([1,2,56,4,89]));