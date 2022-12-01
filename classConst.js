// class is nothing but a special keyword to create the instances of defined properties using constructor method:

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `the full name is ${this.firstName} ${this.lastName}`;
  }
  static getTotal() {
    return "total number of student are 10";
  }
}

// new keyword is used to create the instance of defined class

let firstPerson = new Student("foo", "bar");

console.log(firstPerson.firstName);
console.log(firstPerson);

// instance method: used to create method on every instances of class.
console.log(firstPerson.getFullName());

// static method: they are not created on each instance but on the main Object created using the class

console.log(Student.getTotal());
