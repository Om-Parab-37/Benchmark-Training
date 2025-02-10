import { loginUser } from "./fakeStoreApi.js";

const loginFormEl = document.getElementById("loginform")
const userNameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")

const handleSubmit =async (e)=>{
    e.preventDefault();

    const username = userNameInput.value
    const password = passwordInput.value

    const {token} = await loginUser(username,password)
    console.log(token);
    localStorage.setItem("authToken",token)
    window.location.href = "index.html";
    
        
}

loginFormEl.addEventListener("submit",async(e)=>await handleSubmit(e))

