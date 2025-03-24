import { getUsersDB } from "@/app/_lib/db/users"
import authUser from "../auth/auth-user"

export const getUsersAction = async () => {
    await authUser()
    return await getUsersDB()
}