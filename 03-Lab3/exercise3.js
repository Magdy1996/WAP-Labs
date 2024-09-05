/*
Exercise 4: 
Use reduce only to solve the problem: Given an array of strings,
find all strings to upper case which length is greater than 5.
*/


const toUpperCaseGreaterThanFive  = function(arr){
    return arr.reduce((result, str)=> {
        if(str.length > 5){
            result.push(str.toUpperCase());
        }
        return result;
    }, []);
};

console.log(toUpperCaseGreaterThanFive(["apple", "banana", "strawberry", "kiwi", "grape"])); 
console.log(toUpperCaseGreaterThanFive(["cat", "elephant", "dog", "bird", "zebra"])); 