import { backend } from "./PostsApi"

export interface IUser {
    id: number
    name: string
    username: string
    email: string
    address: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
        lat: string
        lng: string
      }
    },
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
  }

export const getUserById:(userId:number)=>Promise<IUser>=async (userId)=>{
    try {
        const response = await backend.get(`/users/${userId}`) 
        return response.data
    } catch (error) {
        alert(error.message)
    }
}

export const getAllUsers:()=>Promise<IUser[]>=async()=>{
  try {
      const response = await backend.get(`/users`) 
      return response.data
  } catch (error) {
      alert(error.message)
  }
}