var a = [
    { "date": "2023-09-01" },
    { "date": "2023-08-15" },
    { "date": "2023-07-20" },
    { "date": "2022-10-15" },
    { "date": "2021-10-05" },
    { "date": "2021-09-15" },
    { "date": "2021-08-01" }
  ];
//reduce repeted years
var temp = [];
temp[0] = a[0].date.slice(0,4);
a.forEach(e => {
    found = false;
    for(let i = 0;i < temp.length;i++){
        if(temp[i] == e.date.slice(0,4)){
            found = true;
            break;
        }
    }
    if(!found){
        temp[temp.length] = e.date.slice(0,4);
    }
});
//mapping
var news = temp.map(e => {
    var ob = {};
    var t = [];
    for(let i = 0;i < a.length;i++){
        if(e == a[i].date.slice(0, 4)){
            t[t.length] = a[i];
        }
    }
    ob[e] = t;
    return ob;
});

news.forEach(e => {
    console.log(e);
});




  