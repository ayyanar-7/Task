var a = [5, 2, 10, 12, 49];

var f = a.reduce((acc, val) => {
    acc *= val;

    return acc;
});

console.log(f);