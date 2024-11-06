import ProfileInfo from '@/app/components/ProfileInfo'
import db from '../../../../utils/db'
import ProfileHeader from '@/app/components/ProfileHeader'
import ProfileContent from '@/app/components/ProfileContent'
import ProfileBio from '@/app/components/ProfileBio'

import Feed from '@/app/components/Feed'
const getUser = async (id: number) => {
  const user = await db.user.findUnique({
    where: {id},
    include: {
      myFriends: {
        include: {posts: true},
      },
      posts: true,
    },
  })
  return user
}
const ProfilePage = async ({params}: {params: {user: string}}) => {
  const {user} = await params
  const userData = await getUser(Number(user))

  return (
    <section className="w-full">
      <ProfileHeader />
      <ProfileInfo
        name={userData?.name ?? ''}
        friends={userData?.myFriends.length ?? 0}
      />
      <ProfileContent>
        <ProfileBio />
        <Feed myFriends={userData?.myFriends ?? []} />
      </ProfileContent>
    </section>
  )
}

export default ProfilePage
