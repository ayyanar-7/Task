function prime(n){
    var temp = [];
    var j = 0;
    var c = n / 2;

    for(let i = 2;i <= c;i++){
        while(n % i == 0){
            n = n / i;
            temp[j] = i;
            j++;
        }
    }

    return temp
}

a = [6, 10, 25, 32, 5, 56];

news = a.map(e => {
    emp = {};
    emp[e] =  prime(e);

    return emp;
})

console.log(news);