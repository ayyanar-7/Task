var a = [84, 4, 9, 32, 5];

var f = a.reduce((acc, v) => {
    return (acc + v) / 2;
});

console.log(f);