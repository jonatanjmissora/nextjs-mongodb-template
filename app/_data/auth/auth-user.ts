import { redirect } from "next/navigation";
import getUser from "../user/get-user";

export default async function authUser() {

    const user = await getUser()

    if (!user) {
        redirect("/api/auth/login")
    }

    return user

}
