import { useState } from "react"

const LoginPage = () => {
    const [username,setUsername] = useState("")
  return (
    <div className="container w-50">
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputUserName" className="form-label">Email address</label>
                <input type="text" className="form-control" value={username} onChange={(e)=>{setUsername(e.target.value)}} id="exampleInputUserName" />
           
            </div>
            
            <button type="submit"  className="btn btn-primary">Login</button>
        </form>
    </div>
  )
}

export default LoginPage