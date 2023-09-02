var a = [
    {
      "name": "Alice",
      "grades": ["A", "B", "C", "D", "E"]
    },
    {
      "name": "Bob",
      "grades": ["B", "C", "D", "E", "A"]
    },
    {
      "name": "Charlie",
      "grades": ["C", "D", "E", "A", "B"]
    },
    {
      "name": "David",
      "grades": ["D", "E", "A", "B", "C"]
    },
    {
      "name": "Eva",
      "grades": ["E", "A", "B", "C", "D"]
    },
    {
      "name": "Frank",
      "grades": ["A", "B", "C", "D", "E"]
    },
    {
      "name": "Grace",
      "grades": ["B", "C", "D", "E", "A"]
    },
    {
      "name": "Hannah",
      "grades": ["C", "D", "E", "A", "B"]
    },
    {
      "name": "Ivy",
      "grades": ["D", "E", "A", "B", "C"]
    },
    {
      "name": "Jack",
      "grades": ["E", "A", "B", "C", "D"]
    }
];

function avg(arr){
    var sum = 0;
    arr.forEach(e => {
        switch(e){
            case 'A':
                sum += 100;
                break;
            case 'B':
                sum += 90;
                break;
            case 'C':
                sum += 80;
                break;
            case 'D':
                sum += 70
                break;
        }
    });
}