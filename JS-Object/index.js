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
