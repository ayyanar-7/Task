var a = ["tree", "apple", "map", "Tap", "tree", "tap", "new"];

var r = a.reduce((acc, val) => {
    val = val.toLowerCase();

    if(val in acc){
        acc[val]++;
    }
    else{
        acc[val] = 1;
    }
    return acc;
}, {});

console.log(r);