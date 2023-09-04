var a = [
    {
      "name": "Alice",
      "email": "alice@gmail.com"
    },
    {
      "name": "Bob",
      "email": "bob@yahoo.com"
    },
    {
      "name": "Charlie",
      "email": "charlie@gmail.com"
    },
    {
      "name": "David",
      "email": "david@yahoo.com"
    },
    {
      "name": "Eva",
      "email": "eva@gmail.in"
    },
    {
      "name": "Frank",
      "email": "frank@yahoo.com"
    },
    {
      "name": "Grace",
      "email": "grace@gmail.com"
    },
    {
      "name": "Hannah",
      "email": "hannah@yahoo.com"
    },
    {
      "name": "Ivy",
      "email": "ivy@gmail.com"
    },
    {
      "name": "Jack",
      "email": "jack@gmail.in"
    }
  ];
  var domain = "@gmail.in"
  var f = a.filter(e => {
    if(e.email.slice(e.email.indexOf('@')) == domain){
        return e;
    }
  });

  console.log(f);