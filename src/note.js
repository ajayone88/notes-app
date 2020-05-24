const fs = require('fs');
const chalk = require('chalk');
//Add Note
const addNote = (title, body) => {
    const currentNotes = loadNotes();
    let index = currentNotes.findIndex( note => {
        return note.title === title;
    });
    currentNotes.push({
        title: title,
        body: body
    })
    if(index !== -1){
        console.log(chalk.red.bold("Duplicate Note"));
    }else{
        saveNotes(currentNotes);
        console.log(chalk.green.bold("Note added successfully"));
    }
}

//Remove Note
const removeNote = (title) => {
    const currentNotes = loadNotes();
    const newNotesArray = currentNotes.filter( note =>{
        return note.title !== title;
    });
    if(newNotesArray.length === currentNotes.length){
        console.log(chalk.red.inverse.bold("Note not found"));
    }else{
        saveNotes(newNotesArray);
        console.log(chalk.blue.inverse.bold("Note removed successful"));
    }
}

//List Note
const listNotes = () => {
    const currentNotes = loadNotes();
    currentNotes.forEach( note =>{
        console.log(chalk.yellow.bold("Title : - "+ note.title + " Body : - "+ note.body));
    });
    console.log(chalk.green("Note listing successful"));
}

const loadNotes = () =>{
    try{
        const notesBufffer = fs.readFileSync('./data-access/notes.json');
        return JSON.parse(notesBufffer.toString());
    } catch(e) {
        return [];
    }
}

const saveNotes = (notes) =>{
    const JsonNotes = JSON.stringify(notes);
    fs.writeFileSync("./data-access/notes.json", JsonNotes);
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};