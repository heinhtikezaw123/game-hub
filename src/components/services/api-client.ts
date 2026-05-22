import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params : {
        key : "e2d956687a7b47d0bf286cbc4747a445"
    }
})