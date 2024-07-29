// 1. Нохой нэртэй хоосон объект үүсгэ
// Нохойн объектыг консол дээр хэвлэ
// Нохойны объектын үүлдэр, нэр, өнгө, нас, хайр татсан шинж чанарыг нэмнэ үү.
// Нохойн объектоос үүлдэр, нэр, хөл, өнгө, нас, хайр татсан шинж чанарын value - г аваарай
let dog = {
  нэр: "banhar",
  нас: 1,
  үүлдэр: "golden retriever",
  өнгө: "brown",
  хайр: "cute",
};
console.log(dog.үүлдэр, dog.нэр, dog.хөл, dog.өнгө, dog.нас, dog.хайр);
// 2. Машин нэртэй объект
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2019,
  color: "Red",
};
car.color = "black";
car.owner = "me";
console.log(car);
// 2.1 "color" property-г солих
// 2.2 "owner" нэртэй шинэ property нэмэх
// 2.3 Бүх property-руу хандаж log дээр хэвлэх

// 3. Create an object called 'person' with properties name, age, and address.
// 3.1 The address property should be an object with properties street, city, and country.
// 3.2 Access and log the properties of the `address` object.
let person = {
  name: "kherlen",
  age: " 17",
  address: "3r emneleg",
};
person.street = "who knows";
person.city = "Ub";
person.country = "Mongolia";
console.log(person.address);
// 4. Create an object called book with properties title, author, and year.
// Delete the year property from the book object.
// Log the updated book object.
let book = {
  title: "Alphabets",
  auther: " j.k rouling",
  year: 2000,
};
delete book.year;
console.log(book);
// 5. Create an object called movie with properties title, director, and year.
// Log all the keys and values of the movie object to the console.
let movie = {
  title: "Harry potter",
  director: "jk.rouling",
  year: "1999",
};
console.log(movie);
// 6. Create two objects representing two people's details.
// Merge them into a single object.
// Log the merged object.
let person1 = {
  name: "kehrlen",
  age: "17",
};
let person2 = {
  name: "suvd",
  age: "12",
};
let combined = Object.assign(person1, person2);
console.log(combined);
// 7. Create an object data with properties firstName, lastName, and age.
// Rename the firstName property to name.
// Log the updated data object.
let user = {
  firstName: "kherlen",
  lastName: "gurragchaa",
  age: 123,
};
user["name"] = user["firstName"];

delete user["firstName"];

console.log(user);
// 8. Create an object userProfile with properties username, email, and age.
// Write code to check if email exists and log it; if it doesn't, assign a default value and log the updated object.
let userProfile = {
  userName: " Khegal",
  email: "khegal95@gmail.com",
  age: "14",
};
if ("khegal95@gmail.com" == userProfile.email) {
  console.log(true);
} else {
  console.log(false);
}
