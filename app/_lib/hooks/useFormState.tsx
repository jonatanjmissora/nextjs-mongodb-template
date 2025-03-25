"use client"

import { useActionState } from "react"
import { useRouter } from "next/navigation"
import { createNoteAction } from "@/app/_actions/notes/create-note"
import { noteSchema } from "../schemas/note-schema"
import toast from "react-hot-toast"
import { NoteFixType } from "../types/note-type"

export type ServerResponse = {
    success: boolean;
    prevState: { title: string, content: string };
    errors: { title: string, content: string };
  } | null

export default function useFormState({ userId, note }: { userId: string, note?: NoteFixType }) {

  const router = useRouter()

  const [formState, formAction, isPending] = useActionState(async (prevState: ServerResponse, formData: FormData) => {
    const { title, content } = Object.fromEntries(formData.entries())

    // if (title.toString().trim() === "" && content.toString().trim() === "") return

    const newNote = {
      title: title.toString(),
      content: content.toString(),
      author: userId,
      pinned: false,
    }
    // client validation
    const { success, data, error } = noteSchema.safeParse(newNote)
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
      }
    }

    // db response
    // const res = note?._id
    //   ? await editNote(userId, note?._id, data)
    //   : await createNote(userId, data)
    const res = await createNoteAction(userId, newNote)

    if (res?.success) {
      toast.success(`Nota creada exitosamente`)
      router.push("/")
    }
    else {
      toast.error("Error en el servidor")
      return {
        success: false,
        prevState: newNote,
        errors: { ...res.errors }
      }
    }

  }, null)

  return { formState, formAction, isPending }

}