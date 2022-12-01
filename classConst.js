// class is nothing but a special keyword to create the instances of defined properties using constructor method:

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// new keyword is used to create the instance of defined class

let firstPerson = new Student("foo", "bar");

console.log(firstPerson.firstName);
console.log(firstPerson);
