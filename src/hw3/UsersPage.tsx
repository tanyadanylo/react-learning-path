import {useEffect, useState} from "react";
import type {IUser} from "./user.model.ts";
import {getUsers} from "./service.api.ts";
import {Link} from "react-router-dom";
function UsersPage() {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        async function fetchUsers() {
            const response = await getUsers();
            setUsers(response.users);
        }

        fetchUsers();
    }, [])

    return (
        <div>
            {users.map((user) => (
                <div key={user.id} className='border-2 border-solid p-4 m-4'>
                    <h1 className='text-2xl'>{user.firstName} {user.lastName} id:{user.id}</h1>
                    <h2>User name: {user.username}</h2>
                    <h3>Age: {user.age} ({user.birthDate}) </h3>
                    <p>Gender: {user.gender}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Photo:</p>
                    <img src={user.image} alt="user photo"/>
                    <Link className='bg-blue-500 p-2' to={`/cart/${user.id}`}>Show user cart</Link>
                </div>
            ))}
        </div>

    )

}

export default UsersPage;