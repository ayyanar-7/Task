var a = [
    {
      "name": "Product A",
      "category": "Electronics",
      "cost": 400
    },
    {
      "name": "Product B",
      "category": "Clothing",
      "cost": 2000
    },
    {
      "name": "Product C",
      "category": "Home & Garden",
      "cost": 8000
    },
    {
      "name": "Product D",
      "category": "Electronics",
      "cost": 7000
    },
    {
      "name": "Product E",
      "category": "Clothing",
      "cost": 4900
    },
    {
      "name": "Product F",
      "category": "Books",
      "cost": 1200
    },
    {
      "name": "Product G",
      "category": "Home & Garden",
      "cost": 1000
    },
    {
      "name": "Product H",
      "category": "Electronics",
      "cost": 2000
    },
    {
      "name": "Product I",
      "category": "Books",
      "cost": 700
    },
    {
      "name": "Product J",
      "category": "Clothing",
      "cost": 3000
    }
  ];

var f = a.reduce((acc, val) => {
    if(!acc.includes(val.category)){
        acc.push(val.category)
    }

    return acc;
}, []).reduce((acc, val) => {
  acc[val]= a.reduce((t, e) => {
    if(e.category == val){
      t += e.cost;
    }
    return t;
  }, 0);

  return acc;
},{})

console.log(f);