/*
class University {
constructor(name, dept) {
this.name = name;
this.dept = dept;
}
graduation(year) {
console.log(`Graduating ${this.dept} ${year} students`);
}
}
let miu = new University("MIU", "MSD");
miu.graduation(2021);
*/
// 1. Re-write the following code using TypeScript
var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduating ".concat(this.dept, " ").concat(year, " students"));
    };
    return University;
}());
var miu = new University("MIU", "MSD");
miu.graduation(2021);
