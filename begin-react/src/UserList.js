import React from "react";

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'abc',
            email: 'public.abc@gmail.com',
        },
        {
            id: 2,
            username: 'def',
            email: 'public.def@gmail.com',
        },
        {
            id: 3,
            username: 'ghi',
            email: 'public.ghi@gmail.com',
        },
    ];

    return (
        <div>
            {
                users.map(user => (<User user={user} key={user.id} />)) // key할 값이 없다면 index 삽입
            }
        </div>
    );
}

export default UserList;