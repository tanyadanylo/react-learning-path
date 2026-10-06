import axios from "axios";

export const apiCars = axios.create({
    baseURL: "http://bigbird.space/carsAPI/v1",
    timeout: 20000,
})