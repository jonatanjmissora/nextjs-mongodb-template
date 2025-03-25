import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export default async function getUser() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    return user
}