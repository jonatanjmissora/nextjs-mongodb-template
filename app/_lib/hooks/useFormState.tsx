"use client"

import { useActionState } from "react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { ServerResponse } from "../types/form-state-type"
import { NewNoteType, NoteType } from "../types/note-type"
import { noteSchema } from "../schemas/note-schema"
import { createNoteAction } from "@/app/_actions/notes/create-note-action"

const failObj = {
  success: false,
  prevState: { title: "", content: "" },
  errors: {
    title: "",
    content: "",
  },
  serverResp: "",
}

export default function useFormState({ userId, note }: { userId: string, note?: NoteType }) {

  const router = useRouter()

  const [formState, formAction, isPending] = useActionState(async (prevState: ServerResponse, formData: FormData) => {
    const { title, content } = Object.fromEntries(formData.entries())

    if (title.toString().trim() === "" && content.toString().trim() === "") return failObj

    const actualNote = note?._id
      ? {
        ...note,
        title: title.toString(),
        content: content.toString(),
      }
      : {
        title: title.toString(),
        content: content.toString(),
        author: userId,
        pinned: false,
      }

    // client validation
    const { success, error } = noteSchema.safeParse(actualNote)
    if (!success) {
      toast.error("Error en el cliente")
      const { title: titleError, content: contentError } = error.flatten().fieldErrors
      return {
        ...failObj,
        prevState: actualNote,
        errors: {
          title: titleError ? titleError[0] : "",
          content: contentError ? contentError[0] : "",
        },
      }
    }

    // db response
    // const res = note?._id
    //   ? await editNoteAction(userId, note?._id, actualNote)
    //   : await createNoteAction(userId, actualNote)

    // if (res?.success) {
    //   toast.success(`Nota ${note?._id ? "editada" : "creada"} exitosamente`)
    //   router.push("/dashboard")
    //   failObj.success = true
    // }
    // else {
    //   toast.error("Error en el servidor")
    //   failObj.success = false
    //   failObj.prevState = actualNote
    //   failObj.serverResp = res.message
    // }

    return failObj

  }, null)

  return { formState, formAction, isPending }

}