import axios from "axios";

export const api = axios.create({
    baseURL: 'https://parents-ac2c6-default-rtdb.firebaseio.com'
});

