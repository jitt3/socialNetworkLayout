import db from '../../../../utils/db'
const getPosts = async (userId: number) => {
  const post = await db.post.findMany({
    where: {
      authorId: userId,
    },
  })
  return post
}
const PostIdPage = async ({params}: {params: {user: number}}) => {
  const {user} = await params
  const post = await getPosts(Number(user))
  console.log(post) //TODO
}

export default PostIdPage
