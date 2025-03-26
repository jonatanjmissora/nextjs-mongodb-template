"use client"

import TrashSVG from '@/app/_assets/TrashSVG'
import React, { useRef } from 'react'
import SubmitBtn from '../SubmitBtn'
import toast from 'react-hot-toast'
import { deleteNoteAction } from '@/app/_actions/notes/delete-note-action'

export default function NoteDeleteModal({noteId}:{noteId: string}) {
    
    const dialogRef = useRef<HTMLDialogElement>(null)

    const formAction = async() => {

        const res = await deleteNoteAction(noteId)
        if(!res.success) {
            toast.error("No se pudo eliminar")
        }
        else {
            toast.success("Nota eliminada")
        }

        dialogRef.current?.close()
    }
    
    return (
      <>
        <button className="btn btn-ghost btn-square p-2" onClick={() => dialogRef.current?.showModal()}>
            <TrashSVG className="size-4"/>
        </button>
  
        <dialog ref={dialogRef} className="w-full h-full bg-transparent relative">
          <div className= "modal-container rounded-lg bg-[var(--color-primary25)] w-[97%] sm:w-max h-max p-10 sm:p-10 2xl:p-20 fixed top-[50%] left-[50%] flex items-center justify-center">
  
            <div className="flex flex-col justify-center items-center gap-10 sm:gap-6 2xl:gap-10">
  
              <span className="font-bold text-xl sm:text-sm 2xl:text-xl text-[var(--black)] z-10 tracking-widest text-left">¿ Seguro desea eliminar ?</span>
  
              <form action={formAction} className="flex gap-4 w-full">
                <SubmitBtn text='Si' />
                <button onClick={() => dialogRef.current?.close()} type="button" className="flex-1 btn btn-secondary tracking-wider font-bold text-xl sm:text-sm 2xl:text-xl">No</button>
              </form>
  
            </div>
  
          </div>
        </dialog>
      </>
    )
  }