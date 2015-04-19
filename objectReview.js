//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

var favoriteThings = {
  band: "The Killers",
  food: "Everything",
  person: "Anthony",
  book: "I don't reaad much",
  movie: "Too many to choose from",
  holiday: "Birthday"
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "Mustang";
favoriteThings.brand = "Ford";

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray"

//Now, alert your favorite person, then alert your favorite book.

 alert(favoriteThings.person);
 alert(favoriteThings.book);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

for (keyName in user) {
  if (!user[keyName]) {
    delete user[keyName]
  }
};

//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = "Tamara";
user.pwHash = "i'mAwesome";
user.username = "tamef";

//Now console.log your object and make sure it looks right.

console.log(user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

var methodCollector = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

methodCollector.alertHello = function() {alert('hello')};
methodCollector.logHello = function() {console.log('hello')};

//Now call your alertHello and logHello methods. 

methodCollector.alertHello();
methodCollector.logHello();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

var voweler = function(str) {
  var word = str.split('');
  var newObj = {};
  var vowels = 'aeiou'
  for (var i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) !== -1) {
      if (!newObj[word[i]]) {
        newObj[word[i]] = 1 
      } else {
        newObj[word[i]]++
      }
    }
  }
  return newObj;
};

