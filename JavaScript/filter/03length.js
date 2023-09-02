var s = ["Hi", "Congratulations", "Meeting", "Feelings", "Couples", "Tea", "coffee"];

length = 5;

f = s.filter(e => {
    if(e.length > 5){
        return e;
    }
});

console.log(f);