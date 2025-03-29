import { getNoteByIdDB } from "@/app/_lib/db/notes"
import authUser from "../auth/auth-user"
import { KindeUserType } from "@/app/_lib/types/user-type"
import { NoteType } from "@/app/_lib/types/note-type"

export const getNoteByIdAction = async (noteId: string) => {

  const user = await authUser() as KindeUserType
  const note = await getNoteByIdDB(noteId) as NoteType

  return { user, note }

}