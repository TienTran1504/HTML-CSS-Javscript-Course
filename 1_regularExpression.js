const regex = new RegExp('FavoritE');

const string1 = "my favorite food is steak";
const string2 = "my FavoritE food is steak";

console.log(regex.test(string1)); // false
console.log(regex.test(string2)); // true


console.log(/favorite/.test(string1)); // true

console.log(/[a-z]{2,5}/.exec(string1));