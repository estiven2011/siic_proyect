const express = require('express');

const app = express();

const port = 3000;

app.post('/login', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, ()=> {
    console.log(`La  apliacaion esta en linea en el puerto ${port}`);
})

/* import Notes from '../models/notes.models.js'

export const getNote = async (req, res) => {
    try {
        const notes = await Notes.find();
        console.log(notes)
        const today = new Date(); 
        const notesWithTimeElapsed = notes.map((note) => {
            const createdDate = new Date(note.date);
            const timeElapsed = today - createdDate;
            const minutes = Math.floor(timeElapsed / (1000 * 60));
            if (minutes < 60) {
                return { ...note._doc, timeElapsed: ${minutes} minutos };
            } else if (minutes < 1440) {
                const hours = Math.floor(minutes / 60);
                return { ...note._doc, timeElapsed: ${hours} horas };
            } else {
                const days = Math.floor(minutes / 1440);
                return { ...note._doc, timeElapsed: ${days} días };
            }
        });
        return res.json(notesWithTimeElapsed);
    } catch (error) {
        console.log(error);
        res.status(500).json("Error al obtener las notas");
    }
}

export const createNote = async (req, res) => {

    try {
        console.log(req.body)
        const { rol,title, content, date } = req.body;

        const newNote = new Notes({
            rol,
            title,
            content,
            date
        });
        const saveNote = await newNote.save();
        res.status(200).json(saveNote);
    } catch (error) {
        console.log(error);
        res.status(500).json("Error create note")
    }
}


export const updateNote = async (req, res) => {
    try {
        const note = await Notes.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.status(200).json("update note");
    } catch (error) {
        console.log(error);
        res.status(500).json("Error updating note");
    }
}

export const deleteNote = async (req, res) => {
    try {
        const note = await Notes.findByIdAndDelete(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.status(200).json("delete note")
    } catch (error) {
        console.log(error)
        res.status(500).json("Error delete note")
    }
}
 
 */