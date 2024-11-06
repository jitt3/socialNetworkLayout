import {User} from '@prisma/client'
import Link from 'next/link'
import Image from 'next/image'
const UsersList = ({users}: {users: User[]}) => {
  return (
    <ul className="flex gap-2 flex-col border-[1px] w-[400px] p-4 rounded-lg divide-y divide-slate-200">
      {users.map((user) => (
        <li className="py-4 first:pt-0 last:pb-0" key={user.id}>
          <Link
            className="flex items-center flex-row gap-4"
            href={`/profile/${user.id}`}
          >
            <Image
              className="rounded-full"
              src="/user.jpg"
              alt="image"
              width={50}
              height={50}
            />
            <span>{user.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default UsersList
