import axios from "axios";

const axiosInstance = axios.create({
    //local instanse of firebase function
    // baseURL:"http://127.0.0.1:5001/clone-d6205/us-central1/api",

    //deploy version of amazon server on render.com
    baseURL:"https://amazone-clone-api-deploy.onrender.com/"

})
export {axiosInstance}