function fact(n){
    fact = 1;
    for(let i = 1;i <= n;i++){
        fact *= i;
    }
    return fact;
}
var n = 5;

n = [n];

n.forEach(e => {
    console.log(fact(n));
});
