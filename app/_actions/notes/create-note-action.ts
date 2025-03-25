"use server"

import { createNoteDB } from "@/app/_lib/db/notes"
import { noteSchema } from "@/app/_lib/schemas/note-schema"
import { NewNoteType } from "@/app/_lib/types/note-type"

export const createNoteAction = async (userId: string, newNote: NewNoteType) => {

  const failObject = {
    success: false,
    message: "",
  }

  // data validation
  const { success } = noteSchema.safeParse(newNote)
  if (!success) {
    return { ...failObject, message: "Server validation error" }
  }

  return await createNoteDB(newNote)

}