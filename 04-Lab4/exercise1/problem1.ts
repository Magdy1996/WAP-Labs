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

class University {
    name:string;
    dept:string;

    constructor(name:string, dept:string) {
        this.name = name;
        this.dept = dept;
    }
    graduation(year:number):void {
        console.log(`Graduating ${this.dept} ${year} students`);
        }
    }
    let miu:University= new University("MIU", "MSD");
    miu.graduation(2021);