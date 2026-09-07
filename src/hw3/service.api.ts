const BASE_USERS_URL = import.meta.env.VITE_API_USERS_BASE_URL;
const BASE_CARTS_URL = import.meta.env.VITE_API_CARTS_BASE_URL;

 export async function getUsers() {
    const response = await fetch(BASE_USERS_URL);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const users = await response.json();
    return users;
}
export async function getCarts(userId:string) {
     const response = await fetch(`${BASE_CARTS_URL}/user/${userId}`);
     if (!response.ok) {
         throw new Error(response.statusText);
     }
     const carts = await response.json();
     return carts;
}