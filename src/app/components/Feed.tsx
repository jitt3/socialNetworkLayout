import {Post, User} from '@prisma/client'
import FriendsPosts from './FriendsPosts'

const Feed = ({myFriends}: {myFriends: (User & {posts: Post[]})[]}) => {
  return (
    <section className="flex flex-col w-full gap-4 ">
      {myFriends.map((friend) => (
        <FriendsPosts key={friend.id} posts={friend.posts} />
      ))}
    </section>
  )
}

export default Feed
