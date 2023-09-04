function pin(n){
    p = "1111";
    if(n == p){
        return true;
    }
    return false;
}


a = ['3333','4444','5555','1111','6666'];
count = 0;
var found = false;

for(var i = 0;i < 4;i++){
    var a1 = [a[i]];
    a1.forEach(e => {        
        if(pin(e)){
            console.log("That was correct!");
            found = true;
        }
        else{
            console.log("Sorry that was wrong.");
        }

    });
    count++;
    if(found){
        break;
    }
}
if(!found){
    console.log("Sorry, your limit is over");
}