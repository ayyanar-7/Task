var a = [
    {
      "product": "Widget A",
      "cost": 10.99
    },
    {
      "product": "Widget B",
      "cost": 24.95
    },
    {
      "product": "Widget C",
      "cost": 5.99
    },
    {
      "product": "Widget D",
      "cost": 49.99
    },
    {
      "product": "Widget E",
      "cost": 14.50
    },
    {
      "product": "Widget F",
      "cost": 7.25
    },
    {
      "product": "Widget G",
      "cost": 34.99
    }
  ];
  
var total = a.reduce((t, e) => {
    return e.cost + t;
}, 0);

console.log(total);