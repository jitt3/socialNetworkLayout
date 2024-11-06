import db from '../../../../../utils/db'
const getPost = async (id: number) => {
  const post = await db.post.findUnique({
    where: {id},
  })
  return post
}
const PostIdPage = async ({params}: {params: {postId: number}}) => {
  const {postId} = await params
  const post = await getPost(Number(postId))
  return (
    <div>
      <h1 className="text-2xl">{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  )
}

export default PostIdPage
