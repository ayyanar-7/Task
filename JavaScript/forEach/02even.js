var n = 10;

// for(let i = 2;i <= n;i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

var a =[n];

a.forEach(e => {
    for(let i = 2;i <= e;i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
})