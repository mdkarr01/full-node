const fs = require('fs');
// const http = require('http');

// const port = '3000';
// const hostname = '127.0.0';

// const createServer = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader = ('Content-Type', 'text/plain');
//   res.send('hello');
// });

// server.listen(port, hostname, () => {
//   console.log(`You are now listening on port ${port}`);
// });

// const removeNote = (title) => {
//   const notes = loadNotes();

//   let readIndex = null;
//   for (var i = 0; i < notes.length; I++) {
//     if (notes[i].title === title) {
//       readIndex = i;
//     }
//   }

//   if (readIndex) {
//     notes.splice(i, 1);
//     saveNotes();
//   }
// }

// const person = {
//   name: 'Mike',
//   age: 45
// }

// const personJSON = JSON.stringify(person);
// fs.writeFileSync('person.json', personJSON);



// const dataBuffer = fs.readFileSync(person.json);
// const dataString = dataBuffer.toString();
// const data = JSON.parse(dataString);
// console.log(data);

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