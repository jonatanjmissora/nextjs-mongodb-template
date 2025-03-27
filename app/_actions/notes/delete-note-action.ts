"use server"

import authUser from "@/app/_data/auth/auth-user"
import { deleteNoteDB } from "@/app/_lib/db/notes"

export const deleteNoteAction = async (noteId: string) => {

    await authUser()

    return await deleteNoteDB(noteId)

}