import NotesList from "@/app/_components/Dashboard/NotesList";
import getUser from "@/app/_data/user/get-user";
import { Suspense } from "react";

export default async function page() {

  const user = await getUser()

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <NotesList userId={user.id} />
    </Suspense>
  )
}
