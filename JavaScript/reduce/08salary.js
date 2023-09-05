var a = [
    {
      "name": "Alice",
      "salary": 55000
    },
    {
      "name": "Bob",
      "salary": 60000
    },
    {
      "name": "Charlie",
      "salary": 48000
    },
    {
      "name": "David",
      "salary": 72000
    },
    {
      "name": "Eva",
      "salary": 63000
    },
    {
      "name": "Frank",
      "salary": 58000
    },
    {
      "name": "Grace",
      "salary": 52000
    },
    {
      "name": "Hannah",
      "salary": 68000
    },
    {
      "name": "Ivy",
      "salary": 59000
    },
    {
      "name": "Jack",
      "salary": 71000
    }
  ];  

  var f = a.reduce((acc, val) => {
    acc = acc + val.salary;

    return acc;
  }, 0);

  console.log(f);