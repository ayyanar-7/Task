a = ["Tree", "Gova", "Tree"];
news = [];
news[0] == a[0];
a.map(e => {
    found = false;
    for(let i = 0;i < news.length;i++){
        if(e == news[i]){
            found = true;
        }
    }
    if(found == false){
        news[news.length] = e;
    }
});
console.log(news);