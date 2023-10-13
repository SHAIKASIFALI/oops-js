// Working with Object Literals
// Challenge 1
// Create a function that has two parameters (name and age) and returns an object. Let's call this function makePerson. This function will:
// Create an empty object
// Add a name property to the newly created object with its value being the 'name' argument passed into the function
// Add an age property to the newly created object with its value being the 'age' argument passed into the function
// Return the object

function makePerson(name , age) 
{
    const obj = {};
    obj.name = name;
    obj.age = age;
    return obj;
}

const asif = makePerson('asifAli',20);

console.log(asif);
console.log(asif.name);
console.log(asif.age);
console.log(asif.__proto__); //This must return the object prototype which is a function + object
console.dir(makePerson.__proto__); // This must return a function prototype which is also a function + object
console.log(makePerson.prototype.__proto__)
console.dir(Function.prototype)
console.log(Object.prototype)