"use client"

import { useRef } from "react"
import SubmitBtn from "../SubmitBtn"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs"

export default function LogoutModal() {

  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <>
      <button className="tracking-wider italic pb-1 2xl:text-xl hover:text-[var(--color-primary-hover)]" onClick={() => dialogRef.current?.showModal()}>
        cerrar sesión
      </button>

      <dialog ref={dialogRef} className="w-full h-full bg-transparent relative">
        <div className= "modal-container rounded-lg bg-[var(--color-primary25)] w-[97%] sm:w-max h-max p-10 sm:p-10 2xl:p-20 fixed top-[50%] left-[50%] flex items-center justify-center">

          <div className="flex flex-col justify-center items-center gap-10 sm:gap-6 2xl:gap-10">

            <span className="font-bold text-xl sm:text-sm 2xl:text-xl text-[var(--black)] z-10 tracking-widest text-left">¿ Seguro desea cerrar sesión ?</span>

            <div className="flex gap-4 w-full">
              <LogoutLink className="flex-1 btn btn-primary tracking-wider font-bold text-xl sm:text-sm 2xl:text-xl">Si</LogoutLink>
              <button onClick={() => dialogRef.current?.close()} type="button" className="flex-1 btn btn-secondary tracking-wider font-bold text-xl sm:text-sm 2xl:text-xl">No</button>
            </div>

          </div>

        </div>
      </dialog>
    </>
  )
}
