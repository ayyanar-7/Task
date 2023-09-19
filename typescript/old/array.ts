function age(){
    let array : {name: string,
                age : number}[];

    array = [{  name : "Ayyanar",
                age : 22
            },
        {
            name : "Vikram",
            age : 25
        },
        {
            name : "Arun",
            age : 30
        },
        {
            name : "Kumar",
            age : 25
        }
    ];

    var f = array.filter(e => {
        if(e.age < 30){
            return e;
        }
    });

    return f;
}
function list(){
    let temp = [];
    temp.push("<ul>");
    age().forEach(e => {
        temp.push("<li>" + e + "</li>");
    });
    temp.push("</ul>")
    // document.getElementById("demo").innerHTML = temp.join("");
}













