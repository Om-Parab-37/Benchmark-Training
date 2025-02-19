import { useEffect, useState } from 'react'
import { IPost } from '../../utils/PostsApi'
import { getUserById } from '../../utils/UserApi'

type PostListItemProps = {
    post:IPost
}

const PostListItem = ({post}: PostListItemProps) => {

  const[username,setUsername] = useState("")
  useEffect(()=>{
    const fetchUserName = async()=>{
      const {name} = await getUserById(post.userId)
      setUsername(name)
    }
    fetchUserName()
  },[post.userId])
  return (<>

<div className="card mb-3">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p className="card-text">{post.body}</p>
        <p className="card-text">
          <small className="text-muted">Posted by: <strong>{username}</strong></small>
        </p>
      </div>
    </div>
    </>
  )
}

export default PostListItem