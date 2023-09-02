a = [4, 5, 2, 7, 9, 13, 16];

f = a.filter(e => {
    if(e % 2 == 0){
       return e;
    }
});

console.log(f);