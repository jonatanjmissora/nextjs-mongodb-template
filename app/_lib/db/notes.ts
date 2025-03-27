import { revalidateTag } from "next/cache"
import { NoteType } from "../types/note-type"
import { getCollection } from "./connect"
import { getErrorMessage } from "../utils/get-error-message"
import { ObjectId } from "mongodb"


/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

export const getNotesDB = async () => {
    const notesCollection = await getCollection("notes")
    return await notesCollection.find().toArray()
}

/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

export const getNoteByIdDB = async (noteId: string) => {
    const notesCollection = await getCollection("notes")
    const note = await notesCollection.findOne({ _id: new ObjectId(noteId) })
    return { ...note, _id: note?._id.toString() }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

export const createNoteDB = async (newNote: Omit<NoteType, "_id">) => {

    try {
        const notesCollection = await getCollection("notes")
        const res = await notesCollection.insertOne(newNote)

        if (!res.insertedId.toString()) {
            return { success: false, message: "Error insertando dato en db" }
        }

        revalidateTag('notes')
        return { success: true, message: "" }

    } catch (error) {
        return { success: false, message: getErrorMessage(error) }
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

export const deleteNoteDB = async (noteId: string) => {

    try {
        const notesCollection = await getCollection("notes")
        const res = await notesCollection.deleteOne({ _id: new ObjectId(noteId) })

        if (res?.deletedCount !== 1) {
            return { success: false, message: "" }
        }

        revalidateTag('notes')
        return { success: true, message: "" }

    } catch (error) {
        return { success: false, message: getErrorMessage(error) }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

export const updateNoteDB = async (note: NoteType) => {

    try {
        const { title, content } = note
        const notesCollection = await getCollection("notes")
        // db validation
        const res = await notesCollection.updateOne(
            {
                _id: new ObjectId(note._id)
            },
            {
                $set: { "title": title, "content": content }
            }
        )
        if (res.modifiedCount !== 1) {
            return { success: false, message: "No se pudo editar" }
        }

        revalidateTag('notes')
        return { success: true, message: "" }

    } catch (error) {
        return { success: false, message: getErrorMessage(error) }
    }

}