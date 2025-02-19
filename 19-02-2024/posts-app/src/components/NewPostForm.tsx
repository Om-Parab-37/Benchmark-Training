import { useState } from "react"
import { addNewPost } from "../utils/PostsApi"

type NewPostFormProps = {
    handleIsAddingPost:(vlaue:boolean)=>void
    userId:number
} 

function NewPostForm({userId,handleIsAddingPost}: NewPostFormProps) {

    const handleSubmit= (e:React.FormEvent)=>{
        e.preventDefault()
        addNewPost(formData.title,formData.body,userId)
        alert(`Post succecfully posted...!\ntitle:${formData.title}\nbody:${formData.body}`)
        setFormData({title:"",body:""})
        handleIsAddingPost(false)
    }

    const [formData,setFormData]=useState({title:"",body:""})
  return (
    <>  
    <div className="container w-70">
    <form>
        
          <div className="form-group ">
            <label htmlFor="titleInput" className="col-form-label">Title :</label>
            <input required type="text" name="title" value={formData.title} onChange={({target:{name,value}})=>{setFormData({...formData,[name]:value})}} className="form-control" id="titleInput" />
          </div>
          <div className="form-group">
            <label htmlFor="bodyInput"  className="col-form-label">Body :</label>
            <textarea required className="form-control" name="body" onChange={({target:{name,value}})=>{setFormData({...formData,[name]:value})}} value={formData.body} id="bodyInput"></textarea>
          </div>
          <div className="form-group my-3  offset-4 ">
          <button type="button" onClick={()=>{handleIsAddingPost(false)}} className="btn btn-danger mx-2">Discard</button>  
          <button type="submit" onClick={handleSubmit} className="btn btn-primary">Post</button>
          </div>         
    </form>
    </div>
    </>
  )
}

export default NewPostForm