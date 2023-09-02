var a = [
  {
    "name": "Alice",
    "hobbies": ["Reading", "Painting", "Cooking"]
  },
  {
    "name": "Bob",
    "hobbies": ["Hiking", "Photography", "Gardening"]
  },
  {
    "name": "Charlie",
    "hobbies": ["Swimming", "Cycling", "Drawing"]
  },
  {
    "name": "David",
    "hobbies": ["Playing Guitar", "Cooking", "Traveling"]
  },
  {
    "name": "Eva",
    "hobbies": ["Dancing", "Yoga", "Reading"]
  },
  {
    "name": "Frank",
    "hobbies": ["Chess", "Fishing", "Cooking"]
  },
  {
    "name": "Grace",
    "hobbies": ["Hiking", "Painting", "Photography"]
  },
  {
    "name": "Hannah",
    "hobbies": ["Cooking", "Gardening", "Traveling"]
  },
  {
    "name": "Ivy",
    "hobbies": ["Swimming", "Reading", "Cycling"]
  },
  {
    "name": "Jack",
    "hobbies": ["Dancing", "Cooking", "Yoga"]
  }
];

var hob = "Cooking";

var f = a.filter(e => {
  var found = false;
  for(let i =0;i < e.hobbies.length;i++){
    if(hob == e.hobbies[i]){
      found = true;
    }
  }
  if(found){
    return e;
  }
});

console.log(f);

