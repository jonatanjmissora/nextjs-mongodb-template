import { revalidateTag } from "next/cache"
import { NewNoteType } from "../types/note-type"
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

export const createNoteDB = async (newNote: NewNoteType) => {

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
