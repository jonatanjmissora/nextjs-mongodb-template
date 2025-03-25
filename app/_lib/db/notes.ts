import { NoteType } from "../types/note-type"
import { getCollection } from "./connect"

export const getNotesDB = async () => {
    const notesCollection = await getCollection("notes")
    return await notesCollection.find().toArray()
}

export const createNoteDB = async (newNote: NoteType) => {
    const notesCollection = await getCollection("notes")
    return await notesCollection.insertOne(newNote)
}

