import { getNotesAction } from '@/app/_lib/db/actions/notes'
import React from 'react'

export default async function page() {

    const notes = await getNotesAction()

  return (
    <div className="flex-1 flex flex-col gap-2 justify-center items-center mx-auto w-[95%] h-full sm:w-3/4">
      <p className='font-bold text-4xl tracking-wider p-12'>NOTES PAGE</p>
   
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
