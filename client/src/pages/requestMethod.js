import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWRhMWI2ZWQ2YjBkMWZmZDZkNTIyNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzU0NzM3MywiZXhwIjoxNjMzNjMzNzczfQ.Kx6Vp_q8GhYLCt8YM_1y7UvzO9T5YFP79BdgMa_nPZQ";


export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token: `Bearer${TOKEN}` },
});