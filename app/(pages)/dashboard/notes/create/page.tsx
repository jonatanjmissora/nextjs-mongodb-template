import NoteForm from "@/app/_components/Dashboard/NoteForm"
import getUser from "@/app/_data/user/get-user"
import { KindeUserType } from "@/app/_lib/types/user-type"

export default async function page() {

    const user = await getUser() as KindeUserType

  return (
    <div className="flex-1 flex justify-center items-center mx-auto w-[95%] h-full sm:w-1/2">
      <NoteForm userId={user.id} />
    </div>
  )
}
