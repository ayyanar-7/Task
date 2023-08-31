a = [
    { "name": "Eagle", "type": "Bird" },
    { "name": "Ostrich", "type": "Bird" },
    { "name": "Penguin", "type": "Bird" },
    { "name": "Lion", "type": "Animal" },
    { "name": "Dolphin", "type": "Animal" },
    { "name": "Elephant", "type": "Animal" },
    { "name": "Snake", "type": "Reptile" },
    { "name": "Crocodile", "type": "Reptile"},
    { "name": "Turtle", "type": "Reptile" }
    ];
let single = [];
single[0] = a[0].type;
a.forEach(e => {
    found = false;
    for(let i = 0;i < single.length;i++){
        if(e.type == single[i]){
            found = true;
        }
    }
    if(found == false){
        single[single.length] = e.type;
    }
});

news = single.map(e =>{
    let temp = [];
    let ob = {};
    for(i = 0;i < a.length;i++){
        if(e == a[i].type){
            temp[temp.length] = a[i].name;
        }
    }
    ob[e] = temp;

    return ob;
})

console.log(news);