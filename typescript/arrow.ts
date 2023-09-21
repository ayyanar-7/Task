// // // let a: number = 23;
// // // let b: number = 45;

// // // console.log(((a: number, b: number) => {
// // //     return a + b;
// // // })(a, b));

// // // let a: number;
// // // let b: number;

// // // console.log(((a: number = 4, b: number = 8) => {
// // //     return a + b;
// // // })())
// let a: number = 5;
// let b: number = 24;
// let c: number = 15;

// console.log(((a: number, b: number, c?: number): number => {
//     if(c != undefined){
//         return a + b + c;
//     }
//     return a + b;
// })(a, b));

// // console.log(((a: number, ...b:number[]):number => {
    
// //     if(b != undefined){

// //         return a + b.reduce((acc: number, val: number): number => {
// //             acc += val;

// //             return acc;
// //         })
// //     }
// //     return a;
// // })(5, 10, 20, 3, 8));