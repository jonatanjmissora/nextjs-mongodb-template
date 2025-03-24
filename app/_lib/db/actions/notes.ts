import { getNotesDB } from "../data/notes"

export const getNotesAction = async () => {
    return await getNotesDB()
}