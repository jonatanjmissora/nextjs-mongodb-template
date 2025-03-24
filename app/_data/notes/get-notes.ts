import { getNotesDB } from "@/app/_lib/db/notes"
import authUser from "../auth/auth-user"

export const getNotesAction = async () => {
    await authUser()
    return await getNotesDB()
}