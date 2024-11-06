import db from '../../utils/db'
import UsersList from './components/UsersList'
import {User} from '@prisma/client'
const getUsers = async (): Promise<Array<User>> => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const users = await db.user.findMany()
  return users
}
export default async function Home() {
  const users = await getUsers()
  console.log(users)
  return (
    <section className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-2xl">Select one user</h1>
      <UsersList users={users} />
    </section>
  )
}
