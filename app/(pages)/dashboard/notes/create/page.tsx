import NoteFormContainer from "@/app/_components/Dashboard/NoteFormContainer"
import LoadingPage from "@/app/_components/LoadingPage"
import Link from "next/link"
import { Suspense } from "react"

export default async function page({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {

  const userId = (await searchParams).userId ?? ""

  return (
    <div className='flex-1 flex flex-col gap-6 mt-20 items-center mx-auto w-[95%] h-full sm:w-1/2'>

      <div className='flex justify-between items-center py-4 w-[20rem]'>
        <h2 className='text-3xl font-semibold'>Crear Nota</h2>
        <Link className='btn btn-primary' href={"/dashboard"}>Volver</Link>
      </div>

      <Suspense fallback={<LoadingPage />}>
        <NoteFormContainer userId={userId} />
      </Suspense>
    </div>
  )
}
