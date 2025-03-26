import PlusSVG from "@/app/_assets/PlusSvg";
import NotesList from "@/app/_components/Dashboard/NotesList";
import LoadingPage from "@/app/_components/LoadingPage";
import getUser from "@/app/_data/user/get-user";
import Link from "next/link";
import { Suspense } from "react";

export default async function page() {

  const user = await getUser()

  return (
    <div className="flex-1 flex flex-col gap-2 mt-20 items-center mx-auto w-[95%] h-full sm:w-1/2">
      <div className="flex justify-between w-full">
        <span className='font-bold text-2xl tracking-wider pb-12'>NOTES PAGE</span>
        <Link href={`/dashboard/notes/create?userId=${user.id}`}>
          <PlusSVG className='w-6 h-6 cursor-pointer' />
        </Link>
      </div>

      <Suspense fallback={<LoadingPage />}>
        <NotesList userId={user.id} />
      </Suspense>

    </div>
  )
}
