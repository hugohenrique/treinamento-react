import { useEffect, useState } from "react";
import repo from '../../infrastructure/repositories/UserApiRepository';
import UserList from "../components/UserList";

export default function UserListPage() {
    const [users, setUsers] = useState([]);
    // const repo = new UserApiRepository();

    useEffect(() => {
        repo.getAll().then(setUsers);
    }, []);

    return <UserList users={users}/>;
}