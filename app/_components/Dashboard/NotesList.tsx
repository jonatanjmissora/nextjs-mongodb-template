import { getNotesAction } from "@/app/_data/notes/get-notes"
import NoteDeleteModal from "./NoteDeleteModal"
import EditSVG from "@/app/_assets/EditSVG"
import { NoteType } from "@/app/_lib/types/note-type"

export default async function NotesList({ userId }: { userId: string }) {

  const notes = await getNotesAction(userId) as NoteType[]

  return (
    <>
      {
        notes.length === 0
          ? <p>No notes found</p>
          : <div className='flex flex-col gap-0 justify-center items-start w-full'>
            {notes.map(note =>
              <div key={note._id?.toString()}
                // className='flex gap-6 justify-center items-start p-2'
                className="grid grid-cols-[1fr_1fr_0.25fr_0.25fr] w-full even:bg-slate-500/5 p-2 px-6 hover:bg-[var(--color-primary-hover)] rounded-xl overflow-hidden"
              >
                <span>{note.title}</span>
                <span>{note.content}</span>
                {note._id && <NoteDeleteModal noteId={note._id.toString()} />}
                <a href={`/dashboard/notes/edit?userId=${userId}&noteId=${note._id?.toString()}`} className="btn btn-ghost btn-square p-2"><EditSVG className="size-4" /></a>
              </div>
            )}
          </div>
      }
    </>
  )
}
