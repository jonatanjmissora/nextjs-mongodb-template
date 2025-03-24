import { getUsersAction } from "@/app/_data/user/get-users"
import { UserType } from "@/app/_lib/types/user-type"

export default async function UsersList() {

    const users = await getUsersAction() as UserType[]

  return (
    <div className="flex-1 flex flex-col gap-2 justify-center items-center mx-auto w-[95%] h-full sm:w-3/4">
      <p className='font-bold text-4xl tracking-wider pb-12'>USERS PAGE</p>
   
      <div className='flex flex-col gap-6 justify-center items-start'>
        {users.map(user => 
          <div key={user._id.toString()} className='flex gap-6 justify-center items-start'>
            <span>{user.username}</span>
            <span>{user._id.toString()}</span>
          </div>
        )}
      </div>
    </div>
  )
}
