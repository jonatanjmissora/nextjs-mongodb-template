import { redirect } from "next/navigation";
import getUser from "../user/get-user";

export default async function authUser() {
    const user = await getUser()
    if (!user) {
        return redirect("/api/auth/login")
    }
}
