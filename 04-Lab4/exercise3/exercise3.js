function describePerson(person) {
    return "".concat(person.name, " is ").concat(person.age, " years old and is ").concat(person.isStudent ? "a student" : "not a student", ".");
}
var person = { name: "John", age: 25, isStudent: true };
console.log(describePerson(person));
