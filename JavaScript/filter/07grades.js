var a = [
    {
      "name": "Alice",
      "grades": ["A", "B", "C", "D", "E"]
    },
    {
      "name": "Bob",
      "grades": ["B", "C", "D", "E", "E"]
    },
    {
      "name": "Charlie",
      "grades": ["C", "D", "E", "E", "B"]
    },
    {
      "name": "David",
      "grades": ["D", "E", "E", "E", "C"]
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
      "grades": ["B", "C", "A", "E", "A"]
    },
    {
      "name": "Hannah",
      "grades": ["C", "A", "A", "A", "B"]
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

function avgMark(arr){
    var sum = totalMark(arr);
    
    avg = sum / 5;

    return avg;

}


function totalMark(arr){
  var sum = 0;
  arr.forEach(e => {
    sum += gradeToMark(e);
  });

  return sum;

}

function gradeToMark(e){
  switch(e){
    case 'A':
        return 100
    case 'B':
        return 90;
    case 'C':
        return 80;
    case 'D':
        return 70;
    case 'E':
        return 60;
  }
}

var g = 'B';

var f = a.filter(e => {
  var emp = {}; 
  if(avgMark(e.grades) > gradeToMark(g)){
    emp["name"] = e.name;
    emp["grades"] = e.grades;

    return emp;
  }

});

console.log(f);