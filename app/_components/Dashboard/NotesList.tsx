import PlusSVG from "@/app/_assets/PlusSvg"
import { getNotesAction } from "@/app/_data/notes/get-notes"
import Link from "next/link"
import NoteDeleteModal from "./NoteDeleteModal"
import EditSVG from "@/app/_assets/EditSVG"

export default async function NotesList({userId}: {userId: string}) {

  const notes = await getNotesAction()

  return (
    <div className="flex-1 flex flex-col gap-2 justify-center items-center mx-auto w-[95%] h-full sm:w-1/2">
      <div className="flex justify-between w-full">
        <span className='font-bold text-2xl tracking-wider pb-12'>NOTES PAGE</span>
        <Link href={`/dashboard/notes/create?userId=${userId}`}>
          <PlusSVG className='w-6 h-6 cursor-pointer' />
        </Link>
      </div>

    {
      notes.length === 0 
      ? <p>No notes found</p> 
      : <div className='flex flex-col gap-0 justify-center items-start'>
          {notes.map(note => 
            <div key={note._id?.toString()} className='flex gap-6 justify-center items-start border-b border-[var(--foreground25)] p-2'>
              <span>{note.title}</span>
              <span>{note.content}</span>
              <span>{note._id.toString()}</span>
              <span>{note.pinned && "pinned"}</span>
              <NoteDeleteModal noteId={note._id.toString()}/>
              <a href={`/dashboard/notes/edit?userId=${userId}&noteId=${note._id.toString()}`} className="btn btn-ghost btn-square p-2"><EditSVG className="size-4"/></a>
            </div>
          )}
        </div>
    } 

    </div>
  )
}
