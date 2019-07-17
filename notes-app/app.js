const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//Customize yargs version
yargs.version("1.0.1");

yargs.command({
  command: "add",
  describe: "Adding a new note",
  builder: {
    title: {
      describe: "New title",
      //demandOption is basically require; Defaults to true
      demandOption: true,
      //Defaults to a boolean. Have to set it to string
      type: "string"
    },
    body: {
      describe: "Body of the note",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Removing a note",
  handler: function() {
    console.log("Note removed!");
  }
});

yargs.command({
  command: "list",
  describe: "List a note",
  handler: function() {
    console.log("Show notes!");
  }
});

yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function() {
    console.log("Note read!");
  }
});

yargs.parse();

// console.log(yargs.argv);
