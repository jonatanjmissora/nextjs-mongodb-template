import { getNoteByIdDB } from "@/app/_lib/db/notes"
import authUser from "../auth/auth-user"

export const getNoteByIdAction = async (noteId: string) => {

  await authUser()
  return await getNoteByIdDB(noteId)

}