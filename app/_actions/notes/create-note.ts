"use server"

import getUser from "@/app/_data/user/get-user";
import { createNoteDB } from "@/app/_lib/db/notes";
import { noteSchema } from "@/app/_lib/schemas/note-schema";
import { NoteType } from "@/app/_lib/types/note-type";
import { KindeUserType } from "@/app/_lib/types/user-type";
import { getErrorMessage } from "@/app/_lib/utils/get-error-message";
import { revalidateTag } from "next/cache";

export const createNoteAction = async (userId: string, newNote: NoteType) => {

    const failObject = {
      success: false,
      prevState: { title: newNote?.title, content: newNote?.content },
      errors: { title: "", content: "" }
    }

    const user = await getUser() as KindeUserType
    if (!user || user.id !== userId) return failObject
  
    const note = {
      title: newNote.title,
      content: newNote.content,
      author: userId,
      pinned: false,
    }
  
    // data validation
    const { success, data, error } = noteSchema.safeParse(note)
    if (!success) {
      const { title: titleError, content: contentError } = error.flatten().fieldErrors
      failObject.errors = {
        title: titleError ? titleError[0] : "",
        content: contentError ? contentError[0] : ""
      }
      return failObject
    }
  
    try {
      // db validation
      const res = await createNoteDB(note)
      if (!res.insertedId.toString()) {
        failObject.errors.content = "Error en el servidor"
        return failObject
      }
  
      // revalidateTag('notes')
      return {
        success: true,
        prevState: { title: newNote.title, content: newNote.content },
        errors: { title: "", content: "" }
      }
  
    } catch (error) {
      failObject.errors.content = getErrorMessage(error)
      return failObject
    }
  
  }