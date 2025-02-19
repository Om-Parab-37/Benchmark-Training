import { IPost } from "../../utils/PostsApi"
import PostListItem from "./PostListItem"

type PostListProps = {
    allPosts:IPost[]
}
const PostList = ({allPosts}: PostListProps) => {
  return (
    <>
    
    {allPosts.map(post=><PostListItem key={post.id} post={post}/>)}   
    </> 
  )
}

export default PostList