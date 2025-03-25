"use client"

import { useActionState } from "react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { ServerResponse } from "../types/form-state-type"
import { NoteType } from "../types/note-type"
import { noteSchema } from "../schemas/note-schema"
import { createNoteAction } from "@/app/_actions/notes/create-note-action"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"

export default function useFormState({ userId, note }: { userId: string, note?: NoteType }) {

  const router = useRouter()
  const { user } = useKindeBrowserClient()

  const [formState, formAction, isPending] = useActionState(async (prevState: ServerResponse, formData: FormData) => {
    const { title, content } = Object.fromEntries(formData.entries())

    const failObj = {
      success: false,
      prevState: { title: "", content: "" },
      errors: {
        title: "",
        content: "",
      },
      serverResp: "",
    }

    if (user.id !== userId) return { ...failObj, serverResp: "No coinciden los ids de ususario" }
    if (title.toString().trim() === "" && content.toString().trim() === "") return failObj

    const newNote = {
      title: title.toString(),
      content: content.toString(),
      author: userId,
      pinned: false,
    }

    // client validation
    const { success, error } = noteSchema.safeParse(newNote)
    if (!success) {
      const { title: titleError, content: contentError } = error.flatten().fieldErrors
      toast.error("Error en el cliente")
      return {
        success: false,
        prevState: newNote,
        errors: {
          title: titleError ? titleError[0] : "",
          content: contentError ? contentError[0] : "",
        },
        serverResp: "",
      }
    }

    // db response
    // const res = note?._id
    //   ? await editNote(userId, note?._id, data)
    //   : await createNote(userId, data)
    const res = await createNoteAction(userId, newNote)

    if (res?.success) {
      toast.success(`Nota ${note?._id ? "editada" : "creada"} exitosamente`)
      router.push("/")
      failObj.success = true
    }
    else {
      toast.error("Error en el servidor")
      failObj.success = false
      failObj.prevState = newNote
      failObj.serverResp = res.message
    }

    return failObj

  }, null)

  return { formState, formAction, isPending }

}