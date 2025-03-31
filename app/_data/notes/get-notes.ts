import { getNotesDB } from "@/app/_lib/db/notes"
import authUser from "../auth/auth-user"
import { NoteType } from "@/app/_lib/types/note-type"
import { KindeUserType } from "@/app/_lib/types/user-type"
import { unstable_cache } from "next/cache"

export const getNotesAction = unstable_cache(async () => {
    
    const user = await authUser() as KindeUserType
    const notes = await getNotesDB(user.id) as NoteType[]

    return { user, notes}
},
["notes"],
{
    tags: ["notes"],
    revalidate: 3600,
}
)