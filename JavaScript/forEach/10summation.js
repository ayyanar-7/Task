function sum(n){
    sum = 0;
    // for(let i = 1;i <= n;i++){
    //     sum += i;
    // }
    n = [n];
    n.forEach(e => {
        for(let i = 1;i <= e;i++){
            sum += i;
        }
    })

    return sum;
}

n = 10;
console.log(sum(n));