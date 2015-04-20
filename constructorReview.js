//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

var personMaker = function(name, age, height, gender) {
  var people = {
    name: name,
    age: age,
    height: height,
    gender: gender,
  };
  return people
};


//Create a animal array and a person array.

var animal = [];
var person = [];


//Create two instances of Animal and push those into your animal array

var cat = new Animal('cat', 'tabby', 4, 'orange', ['milk', 'tuna', 'steak']);
animal.push(cat);
var dog = new Animal('dog', 'pug', 3, 'tan', ['grass', 'mice', 'birds']);
animal.push(dog);

//Create two instances of person and push those into your person array.

var tamara = personMaker('tamara', 24, "5'1", 'female');
person.push(tamara);
var anthony = personMaker('anthony', 25, "6'0", 'male');
person.push(anthony);


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".


Animal.prototype.eat = function() {
  var randomFood = this.food[Math.floor(Math.random() * this.food.length - 1)];
    alert(this.name + ' ate ' + randomFood);
};


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
no, because it is not a constructor. Once the function has been set it cannot be added to.


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/