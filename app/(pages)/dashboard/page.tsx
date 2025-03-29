import PlusSVG from "@/app/_assets/PlusSvg";
import NotesList from "@/app/_components/Dashboard/NotesList";
import LoadingPage from "@/app/_components/LoadingPage";
import Link from "next/link";
import { Suspense } from "react";

export default async function page() {

  return (
    <div className="flex-1 flex flex-col gap-2 items-center mx-auto w-[95%] h-full sm:w-1/2">
      <div className="flex justify-between w-full p-2 px-6">
        <span className='font-bold text-2xl tracking-wider pb-6'>NOTES PAGE</span>
        <Link href={`/dashboard/notes/create`}>
          <PlusSVG className='w-6 h-6 cursor-pointer' />
        </Link>
      </div>

      <Suspense fallback={<LoadingPage />}>
        <NotesList />
      </Suspense>

    </div>
  )
}
