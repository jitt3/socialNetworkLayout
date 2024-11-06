import {Post} from '@prisma/client'
import Link from 'next/link'

const FriendsPosts = ({posts}: {posts: Post[]}) => {
  return (
    <div className="pl-2 w-full flex flex-col gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col gap-2 w-full border-[1px] gap-4 rounded-lg p-4"
        >
          <div className="flex items-center gap-4">
            <Link href={`/posts/${post.authorId}/${post.id}`}>
              <h2 className="text-lg font-bold">{post.title}</h2>
            </Link>
          </div>
          <p>{post.content}</p>
          <section className="flex gap-2 text-xs">
            <span> 2 likes</span>
            <span>2 comments</span>
          </section>
        </div>
      ))}
    </div>
  )
}

export default FriendsPosts
