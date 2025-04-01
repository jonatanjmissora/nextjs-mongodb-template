import NoteFormContainer from "@/app/_components/Dashboard/NoteFormContainer"
import Link from "next/link"

export default async function page() {

  return (
    <div className='flex-1 flex flex-col gap-6 items-center mx-auto w-[95%] h-full sm:w-1/2'>

      <div className='flex justify-between items-center py-4 w-[20rem]'>
        <h2 className='text-3xl font-semibold'>Crear Nota</h2>
        <Link className='btn btn-primary' href={"/dashboard"}>Volver</Link>
      </div>

      <NoteFormContainer />

    </div>
  )
}
