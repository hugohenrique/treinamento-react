import React from 'react';

export default function UserList({ users }) {
    return (
        <ul>
            {users.map((u => <li key={u.id}>{u.name}</li>))}
        </ul>
    );
}