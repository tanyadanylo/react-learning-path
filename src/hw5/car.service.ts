import {apiCars} from "./apiCars";

export interface ICar {
    id?: number;
    brand: string;
    year: number;
    price: number;
}

export const postCar = async (data: ICar) => {
    try {
        const response = await apiCars.post('/cars', data);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}