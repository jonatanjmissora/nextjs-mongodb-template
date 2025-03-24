import { getCollection } from "../connect"

export const getNotesDB = async () => {
    const notesCollection = await getCollection("notes")
    return await notesCollection.find().toArray()
}