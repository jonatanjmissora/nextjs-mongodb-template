import { revalidateTag } from "next/cache"
import { NewNoteType } from "../types/note-type"
import { getCollection } from "./connect"
import { getErrorMessage } from "../utils/get-error-message"

export const getNotesDB = async () => {
    const notesCollection = await getCollection("notes")
    return await notesCollection.find().toArray()
}

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

