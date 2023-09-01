function pin(n){
    p = "1111";
    if(n == p){
        return true;
    }
    return false;
}


a = ['3333','1111','4444','5555','6666'];

count = 0;
while(count <= 3){
    if(pin(a[count])){
        console.log("That was correct!");
        break;
    }
    else{
        console.log("Sorry that was wrong.");
    }
    count++;
}