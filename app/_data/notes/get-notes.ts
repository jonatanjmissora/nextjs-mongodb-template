import { getNotesDB } from "@/app/_lib/db/notes"
import authUser from "../auth/auth-user"
import { NoteType } from "@/app/_lib/types/note-type"
import { KindeUserType } from "@/app/_lib/types/user-type"

export const getNotesAction = async () => {
    
    const user = await authUser() as KindeUserType
    const notes = await getNotesDB(user.id) as NoteType[]

    return { user, notes}
}