"use client"
import { useFormStatus } from "react-dom";
import SpinnerSVG from "../_assets/SpinnerSVG";

export default function SubmitBtn({ text = "Si", className }: { text?: string, className?: string }) {

  const { pending } = useFormStatus()

  return (
    <button
      className={`flex-1 btn btn-primary tracking-wider font-bold ${className}`}
      disabled={pending}
      type="submit" >
      {pending ? <SpinnerSVG className='size-5' /> : text}
    </button>

  )
}

