import {useEffect, useState} from "react";
import type {IUser} from "./user.model.ts";
import {getUsers} from "./service.api.ts";
import UserCard from "./UserCard.tsx";
function UserPage() {
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
                <UserCard key={user.id} user={user}/>
            ))}
        </div>

    )

}

export default UserPage;