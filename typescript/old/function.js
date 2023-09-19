"use strict";
let a = 5;
let b = 10;
// function sum(a: number, b: number):number{
//     return a + b;
// }
// console.log(sum(a, b));
// function sum(a: number = 20, b: number = 25): number{
//     return a + b;
// }
// console.log(sum(a, b));
// function sum(a: number, b: number, c?:number): number{
//     if(c != undefined){
//         return a * b * c;
//     }
//     return a * b;
// }
function sum(a, ...b) {
    let c = 0;
    b.forEach(e => {
        c = c + e;
    });
    return c;
}
console.log(sum(5, 4, 6, 8, 9.5, 12));
