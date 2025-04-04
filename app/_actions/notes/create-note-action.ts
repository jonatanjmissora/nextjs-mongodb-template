"use server"

import authUser from "@/app/_data/auth/auth-user"
import { createNoteDB } from "@/app/_lib/db/notes"
import { noteSchema } from "@/app/_lib/schemas/note-schema"
import { NoteType } from "@/app/_lib/types/note-type"

export const createNoteAction = async (newNote: Omit<NoteType, "_id">) => {

  await authUser()

  // data validation
  const { success } = noteSchema.safeParse(newNote)
  if (!success) {
    return { success: false, message: "Server validation error" }
  }

  return await createNoteDB(newNote)

}