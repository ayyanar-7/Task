a = [
    {
      "name": "Alice",
      "age": 25
    },
    {
      "name": "Bob",
      "age": 22
    },
    {
      "name": "Eve",
      "age": 22
    },
    {
      "name": "David",
      "age": 30
    },
    {
      "name": "Emma",
      "age": 22
    },
    {
      "name": "Frank",
      "age": 25
    },
    {
      "name": "Grace",
      "age": 30
    },
    {
      "name": "Henry",
      "age": 25
    },
    {
      "name": "Isabel",
      "age": 25
    },
    {
      "name": "Jack",
      "age": 22
    }
  ]
  var temp =[];
  temp[0] = a[0].age;
  
  for(let i = 1;i < a.length;i++){
      found = false;
      for(let j = 0;j < temp.length;j++){
          if(a[i].age == temp[j]){
              found = true;
          }
      }
      if(found == false){
          temp[temp.length] = a[i].age;
      }
  }
  news = temp.map(e => {
      var emp = {};
      var arr = [];
      for(let i = 0;i < a.length;i++){
          if(e == a[i].age){
              arr[arr.length] = a[i].name;
          }
      }
      emp[e] = arr;
      return emp;
  });
  
  console.log(news);
    




