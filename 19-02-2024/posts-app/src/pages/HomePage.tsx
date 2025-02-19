import {  useEffect, useState } from "react"
import {getAllPostsByUserId, IPost } from "../utils/PostsApi"
import PostList from "../components/HomePageComponents/PostList"
import { getAllUsers, IUser } from "../utils/UserApi"
import NewPostForm from "../components/NewPostForm"

const HomePage = () => {

  const [allPosts,setAllPosts] = useState<IPost[]>([])
  const [allUsers,setAllUsers] = useState<IUser[]>([])
  const [selectedUserId,setSelectedUserId] = useState<number>(0)
  const[isAddingPost,setIsAddingPost] = useState<boolean>(false)
  useEffect(()=>{
    const fetchData = async()=>setAllPosts(await getAllPostsByUserId(selectedUserId))
    fetchData()
  },[selectedUserId])

  useEffect(()=>{
    const fetchAllUsers = async ()=>{
      const result = await getAllUsers()
      setAllUsers(result)
    }
    fetchAllUsers()
  },[])
  
  const handleIsAddingPost=(value:boolean)=>{
    setIsAddingPost(value)
  }


    return (
    <>
    <div className="p-3">
    <div className="row my-3">
    <div className="col-8">
    <button type="button" className="btn col-4 btn-primary" onClick={()=>setIsAddingPost(true)}>Add New Post</button>
    {isAddingPost && <NewPostForm handleIsAddingPost={handleIsAddingPost} userId={1}/>}
    </div>
    <div className="col-4 ">
    <select className="form-select" onChange={(e)=>{setSelectedUserId(Number(e.target.value))}} aria-label="Default select example">
    <option value={0} >All Users</option>
    {allUsers.map((user)=><option key={user.id} value={user.id}>{user.name}</option>)}
    </select>
    </div>
    </div>
    <PostList allPosts={allPosts}/>
    </div>
    </>
  )
}

export default HomePage