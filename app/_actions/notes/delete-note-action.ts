"use server"

import { deleteNoteDB } from "@/app/_lib/db/notes"

export const deleteNoteAction = async(noteId: string) => {
    
    return await deleteNoteDB(noteId)

}