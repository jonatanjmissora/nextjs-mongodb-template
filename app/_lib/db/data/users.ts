import { getCollection } from "../connect"

export const getUsersDB = async () => {
    const usersCollection = await getCollection("users")
    return await usersCollection.find().toArray()
}