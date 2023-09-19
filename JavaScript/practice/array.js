function hello(){
    var a = ["Ayyanar", "Jeeva", "Sathish"];
    var temp = [];
    temp.push("<ul>");

    a.forEach(e => {
        temp.push("<li>"+ e + "</li>");
    });
    temp.push("</ul>");

    document.getElementById("demo").innerHTML = temp.join("");
}