var a = [
    {"date": "2023-09-04"},
    {"date": "2023-09-05"},
    {"date": "2023-09-06"},
    {"date": "2023-09-07"},
    {"date": "2023-09-08"},
    {"date": "2023-09-09"},
    {"date": "2023-09-10"},
    {"date": "2023-09-11"},
    {"date": "2023-09-12"},
    {"date": "2023-09-13"}
  ];
var start = "2023-09-05";
var end = "2023-09-11";

var f = a.filter(e => {
    if(e["date"] >= start && e["date"] <= end){
        return e;
    }
});

console.log(f);
  