var students = [
    {
      name: 'A',
      gender: 'male',
    },
    {
      name: 'B',
      gender: 'male',
    },
    {
      name: 'C',
      gender: 'female',
    },
    {
      name: 'D',
      gender: 'male',
    },
    {
      name: 'E',
      gender: 'female',
    },
    {
      name: 'F',
      gender: 'female',
    },
  ]
  
  var grouped_students = students.group((student) => student.gender)
  console.log(grouped_students)
  