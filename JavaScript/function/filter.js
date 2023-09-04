var a = [5, 10, 15, 20, 25];

// var a1 = a.filter(e => e % 2 == 0);

// var a1 = a.map(e => {
//     if(e % 2 == 0){
//         return e;
//     }
// });
// console.log(a1);
function fn(e){
    if(e % 2 == 0){
        return e;
    }
}
var a1 = a.filter(fn);

console.log(a1);