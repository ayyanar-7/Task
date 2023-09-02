a = [
    { "name": "Eagle", "type": "Bird" },
    { "name": "Ostrich", "type": "Bird" },
    { "name": "Penguin", "type": "Bird" },
    { "name": "Lion", "type": "Animal" },
    { "name": "Snake", "type": "Reptile" },
    { "name": "Crocodile", "type": "Reptile"},
    { "name": "Turtle", "type": "Reptile" }
    ];
// var temp = [];
// temp[0] = a[0].type;
// a.forEach(e => {
//     found = false;
//     for(let i = 0;i < temp.length;i++){
//         if(e.type == temp[i]){
//             found = true;
//         }
//     }
//     if(!found){
//         temp[temp.length] = e.type;
//     }
// })


// f = temp.filter(e => {
//     var count = 0;
//     for(var i = 0;i < a.length;i++){
//         if(e == a[i].type){
//             count++;
//         }
//     }

//     if(count == 1){
//         return a[i];
//     }
    
// })

// console.log(f);
var temp = [];
a.filter(e => {
    found = false;
    for(let i = 0;i < temp.length;i++){
        if(temp[i] == e.type){
            found = true;
        }
    }
    if(!found){
        temp[temp.length] = e.type;
    }
});

console.log(temp);