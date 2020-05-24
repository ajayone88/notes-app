const notes = require("./note.js");
const yargs = require('yargs');
console.log("Notes App Started");
yargs.version("1.1.0");

// Add Note
yargs.command({
    command:'add',
    describe:'Add note',
    builder:{
        title:{
            describe:"Title of the note",
            demandOption: true,
            type:'string'
        },
        body:{
            describe:"Body of the note",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
})

// Remove Note
yargs.command({
    command:'remove',
    describe:'remove note',
    builder:{
        title:{
            describe:"Title of the note",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

// List Note
yargs.command({
    command:'list',
    describe:'List note',
    handler(argv){
        notes.listNotes();
    }
})

yargs.parse();