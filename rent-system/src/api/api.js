import axios from 'axios';

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "b1b3d12d-b124-4d30-94fb-f0e6e3e02305" },
});

export const login = async (email, password) => {
    return instance.post("auth/login", {
        email,
        password,
    }).then((response) => response.data);
};
