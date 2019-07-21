const removeNote = function(title) {
  const notes = loadNotes();
  let indexToRemove = null;
  for (var i = 0; i < notes.length; i++) {
    if (notes[i].title === title) {
      indexToRemove = i;
    }
  }

  if (indexToRemove) {
    notes.splice(i, 1);
    saveNotes(notes);
  }
};

const removeNote = function(title) {
  const notes = loadNotes();

  let indexToRemove = null;

  for (var i = 0; i <= notes.length; i++) {
    if (notes[i].title === title) {
      indexToRemove = i;
    }
  }

  if (indexToRemove) {
    notes.splice(i, 1);
    saveNotes(notes);
  }

  // const notesToKeep = notes.filter(function(note) {
  //   return note.title !== title;
  // });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note Removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("Note not removed!"));
  }
};
