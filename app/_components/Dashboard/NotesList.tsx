import PlusSVG from "@/app/_assets/PlusSvg"
import { getNotesAction } from "@/app/_data/notes/get-notes"
import { NoteType } from "@/app/_lib/types/note-type"
import Link from "next/link"

export default async function NotesList() {

  const notes = await getNotesAction() as NoteType[]

  return (
    <div className="flex-1 flex flex-col gap-2 justify-center items-center mx-auto w-[95%] h-full sm:w-1/2">
      <div className="flex justify-between w-full">
        <span className='font-bold text-2xl tracking-wider pb-12'>NOTES PAGE</span>
        <Link href='/dashboard/notes/create'>
          <PlusSVG className='w-6 h-6 cursor-pointer' />
        </Link>
      </div>

    {
      notes.length === 0 
      ? <p>No notes found</p> 
      : <div className='flex flex-col gap-6 justify-center items-start'>
          {notes.map(note => 
            <div key={note._id?.toString()} className='flex gap-6 justify-center items-start'>
              <span>{note.title}</span>
              <span>{note.content}</span>
              <span>{note.author}</span>
              <span>{note.pinned && "pinned"}</span>
            </div>
          )}
        </div>
    }

    </div>
  )
}
