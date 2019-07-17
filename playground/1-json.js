const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

// const newPerson = {
//   name: "Mike",
//   planet: "Earth",
//   age: "53"
// };

// Or......

data.name = "Don";
data.age = 52;

const editInfo = JSON.stringify(data);
fs.writeFileSync("1-json.json", editInfo);

console.log(editInfo);
