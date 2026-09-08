import type {IUser} from "./user.model.ts";
import {Link} from "react-router-dom";

function UserCard({user}: {user: IUser}) {
    return(
        <div className='border-2 border-solid p-4 m-4'>
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
    )
}

export default UserCard;