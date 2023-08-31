s = [{'name':"Ayyanar",'age':22},
   {'name':"Vikram",'age':25},
   {'name':"Guna",'age':20},
   {'name':"David",'age':35}];

newS = s.map(e => {
    a = {};
    a.new = 'Mr' + e.name;
    a.age = e.age;
    a.sal = e.age * 1000;

    return a;
})

//s.forEach(e => console.log(e));
//f = s.filter(e => e.age >= 23);
//console.log(f)
//news = s.map(e => e.name = 'Mr ' + e.name);
//console.log(news);

total = newS.reduce((a, b) => (a.sal + b.sal));

//console.log(total);
console.log(newS);