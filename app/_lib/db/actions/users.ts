import { getUsersDB } from "../data/users"

export const getUsersAction = async () => {
    return await getUsersDB()
}