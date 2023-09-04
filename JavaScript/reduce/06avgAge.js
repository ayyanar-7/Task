var a = [
    {
      "name": "Alice",
      "age": 25
    },
    {
      "name": "Bob",
      "age": 30
    },
    {
      "name": "Charlie",
      "age": 22
    },
    {
      "name": "David",
      "age": 28
    },
    {
      "name": "Eva",
      "age": 35
    },
    {
      "name": "Frank",
      "age": 27
    },
    {
      "name": "Grace",
      "age": 24
    },
    {
      "name": "Hannah",
      "age": 32
    },
    {
      "name": "Ivy",
      "age": 29
    },
    {
      "name": "Jack",
      "age": 31
    }
  ];
  
var f = a.reduce((acc, val) => {
    acc = (acc + val.age) / 2;

    return acc;
}, 0);

console.log(f.toFixed(2));