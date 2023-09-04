var a = [
  {
    "product": "Widget A",
    "price": 10.99,
    "quantity": 3
  },
  {
    "product": "Widget B",
    "price": 24.95,
    "quantity": 2
  },
  {
    "product": "Widget C",
    "price": 5.99,
    "quantity": 5
  },
  {
    "product": "Widget D",
    "price": 49.99,
    "quantity": 1
  },
  {
    "product": "Widget E",
    "price": 14.50,
    "quantity": 4
  },
  {
    "product": "Widget F",
    "price": 7.25,
    "quantity": 2
  },
  {
    "product": "Widget G",
    "price": 34.99,
    "quantity": 1
  },
  {
    "product": "Widget H",
    "price": 12.75,
    "quantity": 3
  },
  {
    "product": "Widget I",
    "price": 19.99,
    "quantity": 2
  },
  {
    "product": "Widget J",
    "price": 8.49,
    "quantity": 5
  }
];

var f = a.reduce((acc, val) => {
  return acc + (val.price * val.quantity);
}, 0);

console.log(f);