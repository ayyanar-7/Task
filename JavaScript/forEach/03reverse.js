a = ['g',5,"Hello",8.9,'a'];

// for(let i = a.length - 1;i >= 0;i--){
//     console.log(a[i]);
// }

a.forEach((e, i, arr) => {
    console.log(a[arr.length - 1 - i]);
});
