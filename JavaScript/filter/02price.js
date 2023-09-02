a = [
    {'object' : "Mobile",
    'price' : 15000},
    {'object' : "TV",
    'price' : 25000},
    {'object' : "Laptop",
    'price' : 60800},
    {'object' : "Refrigerator",
    'price' : 4560},
    {'object' : "Watch",
    'price' : 2500},
    {'object' : "Tablet",
    'price' : 8000},
    {'object' : "Ipad",
    'price' : 5000},
    {'object' : "Computer",
    'price' : 10000},
    
];

n = 9000;

f = a.filter(e => {
    if(e.price < n){
        return e;
    }
});

console.log(f);