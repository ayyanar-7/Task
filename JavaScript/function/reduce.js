a = [4, 6, 2, 10, 8];

// b = a.reduce((acc, val) => {
//     // console.log(acc);
//     // console.log(val);
    
//     return acc + val;
// }, 10);

// console.log(b);
function fun(a, b){
    return a + b;
}

b = a.reduce(fun,