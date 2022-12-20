import axios from 'axios';

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "b1b3d12d-b124-4d30-94fb-f0e6e3e02305" },
});

export const UserAPI = {
    async getUser() {
        const response = await instance.get("User");
        return response.data;
    }
};

export const BikeAPI = {
    async getBikes() {
        const response = await instance.get("Bike")
        return response.data;
    },
    async getBike(id) {
        const response = await instance.get(`Bike/${id}`)
        return response.data;
    },
    async addBike() {
        const response = await instance.post("Bike", {
            name: "Name",
            type: "type"
        })
        return response.data;
    },
    async deleteBike() {
        const response = await instance.delete("Bike")
        return response.data;
    }
};

export const RentAPI = {
    async getRent() {
        const response = await instance.get("Rent")
        return response.data;
    },
    async addRent() {
        const response = await instance.post("Rent")
        return response.data;
    }
};