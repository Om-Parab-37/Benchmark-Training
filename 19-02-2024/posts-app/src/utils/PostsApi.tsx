import axios from "axios";

export interface IPost{
    id: number
  title: string
  body: string
  userId: number
}

const axiosConfig = {
    baseURL: "https://jsonplaceholder.typicode.com" 
}

export const backend = axios.create(axiosConfig)

export const getAllPosts:()=>Promise<IPost[]>=async ()=>{

    try {
        const result = await backend.get("/posts")
        return result.data
    } catch (error) {
        alert(error.message)
    }
    
}

export const addNewPost:(title:string,body:string,userId:number)=>Promise<IPost[]>=async (title:string,body:string,userId:number=1)=>{
    try {
        const result = await backend.post("/posts",{title,body,userId})
        return result.data
    } catch (error) {
        alert(error.message)
    }    
}

export const getAllPostsByUserId:(userId:number)=>Promise<IPost[]>=async (userId:number)=>{

    try {
        
        const {data} = await backend.get("/posts")
        if(userId===0) return data 
        return data.filter((post:IPost)=>post.userId===userId)
    } catch (error) {
        alert(error.message)
    }
    
}
