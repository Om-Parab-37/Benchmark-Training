import { loginUser } from "./fakeStoreApi.js";

type LoginResponse = { token: string };

const loginFormEl = document.getElementById("loginform") 
const userNameInput = document.getElementById("username") 
const passwordInput = document.getElementById("password") 

const handleSubmit = async (e: Event): Promise<void> => {
    e.preventDefault();

    if (!userNameInput || !passwordInput) {
        console.error("Username or password input field not found");
        return;
    }

    const username = userNameInput.value;
    const password = passwordInput.value;

    try {
        const { token }: LoginResponse = await loginUser(username, password);
        console.log(token);
        localStorage.setItem("authToken", token);
        window.location.href = "index.html";
    } catch (error) {
        console.error("Login failed", error);
    }
};

loginFormEl?.addEventListener("submit", async (e) => await handleSubmit(e));
