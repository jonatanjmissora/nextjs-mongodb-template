"use client"

import SubmitBtn from "../SubmitBtn";
import { NoteType } from "@/app/_lib/types/note-type";
import useFormState from "@/app/_lib/hooks/useFormState";

export default function NoteForm({ userId, note }: { userId: string, note?: NoteType }) {

  const { formState, formAction } = useFormState({ userId, note })

  return (
    <form action={formAction} className='flex flex-col gap-4 w-[20rem]'>

      <input
        autoComplete='off'
        name="title"
        type="text"
        placeholder="Titulo"
        className="input max-w-xs text-xl py-3"
        defaultValue={formState?.prevState?.title || note?.title || ""}
      />
      <p className='text-orange-500 italic min-h-6'>{formState?.errors?.title}</p>

      <textarea
        className="input text-xl py-3"
        placeholder="Contenido"
        name="content"
        defaultValue={formState?.prevState?.content || note?.content || ""}
      />

      <p className='text-orange-500 italic min-h-6'>{formState?.errors?.content}</p>

      <SubmitBtn text={note?._id ? "Editar" : "Crear"} />

      <p className='text-orange-500 italic min-h-6'>{formState?.serverResp}</p>
    </form>
  )
}
