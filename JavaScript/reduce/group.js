var a = [
    {
      "EmployeeID": 1,
      "Name": "John Doe",
      "Age": 30,
      "Salary": 60000,
      "Department": "HR"
    },
    {
      "EmployeeID": 2,
      "Name": "Jane Smith",
      "Age": 28,
      "Salary": 65000,
      "Department": "Marketing"
    },
    {
      "EmployeeID": 3,
      "Name": "Michael Johnson",
      "Age": 35,
      "Salary": 75000,
      "Department": "Engineering"
    },
    {
      "EmployeeID": 4,
      "Name": "Emily Davis",
      "Age": 32,
      "Salary": 70000,
      "Department": "Finance"
    },
    {
      "EmployeeID": 5,
      "Name": "David Wilson",
      "Age": 27,
      "Salary": 62000,
      "Department": "Sales"
    },
    {
      "EmployeeID": 6,
      "Name": "Sophia Martinez",
      "Age": 29,
      "Salary": 68000,
      "Department": "Marketing"
    },
    {
      "EmployeeID": 7,
      "Name": "Liam Brown",
      "Age": 33,
      "Salary": 72000,
      "Department": "Engineering"
    },
    {
      "EmployeeID": 8,
      "Name": "Olivia Taylor",
      "Age": 31,
      "Salary": 71000,
      "Department": "Finance"
    },
    {
      "EmployeeID": 9,
      "Name": "Noah Anderson",
      "Age": 26,
      "Salary": 63000,
      "Department": "Sales"
    },
    {
      "EmployeeID": 10,
      "Name": "Ava Garcia",
      "Age": 34,
      "Salary": 74000,
      "Department": "HR"
    }
];

var r = a.reduce((acc, val) => {
    if(val.Department in acc){
        acc[val.Department] += val.Salary;
    }
    else{
        acc[val.Department] = val.Salary;
    }

    return acc;
}, {});

console.log(r);


// var g = a.groupBy(e => e.Department);

// console.log(g);

// var group = a.reduce((acc, val) => {
//     if(val.Department in acc){
//         acc[val.Department] += val.Salary;
//     }
//     else{
//         acc[val.Department] = val.Salary;
//     }

//     return acc;
// }, {}).groupBy(e => e.Department);;

// console.log(group);