import axios from "axios";

const baseURL = "http://localhost:3001";

const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    },
});

const protectedInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        // "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    },
    withCredentials: true
});
export { instance, protectedInstance };