import "server-only"
import { getNotesDB } from "@/app/_lib/db/notes"
import authUser from "../auth/auth-user"
import { KindeUserType } from "@/app/_lib/types/user-type"
import { unstable_cache } from "next/cache"

const getNotes = unstable_cache(async (userId: string) => {
    console.log("NEW FETCH")
    return await getNotesDB(userId)
},
    ["notes"],
    {
        tags: ["notes"],
        revalidate: 3600,
    }
)

export const getNotesAction = async () => {

    const user = await authUser() as KindeUserType
    const notes = await getNotes(user.id)
    return { user, notes }
}