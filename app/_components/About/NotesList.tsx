import { getNotesAction } from "@/app/_data/notes/get-notes"
import { NoteType } from "@/app/_lib/types/note-type"

export default async function NotesList() {

    const notes = await getNotesAction() as NoteType[]

  return (
    <div className="flex-1 flex flex-col gap-2 justify-center items-center mx-auto w-[95%] h-full sm:w-3/4">
      <p className='font-bold text-4xl tracking-wider pb-12'>NOTES PAGE</p>
   
      <div className='flex flex-col gap-6 justify-center items-start'>
        {notes.map(note => 
          <div key={note._id.toString()} className='flex gap-6 justify-center items-start'>
            <span>{note.title}</span>
            <span>{note.content}</span>
            <span>{note.author}</span>
            <span>{note.pinned}</span>
          </div>
        )}
      </div>
    </div>
  )
}
