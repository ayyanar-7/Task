a = [
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
      "age": 35
    },
    {
      "name": "David",
      "age": 25
    },
    {
      "name": "Eva",
      "age": 30
    },
    {
      "name": "Frank",
      "age": 35
    },
    {
      "name": "Grace",
      "age": 25
    },
    {
      "name": "Hannah",
      "age": 30
    },
    {
      "name": "Ivy",
      "age": 35
    },
    {
      "name": "Jack",
      "age": 25
    }
  ];

var age  = 27;

f = a.filter(e => {
    if(e.age > age){
        return e.name;
    }
})

console.log(f);
  