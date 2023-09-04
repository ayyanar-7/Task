var s = ["tree", "man", "implement", "maintain", "Overload"];

var f = s.reduce((acc, val) => {
    if(acc.length < val.length){
        acc = val;
    }
    return acc;
});

console.log(f);