import React from "react";

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList({users}) {

    return (
        <div>
            {
                users.map(user => (<User user={user} key={user.id} />)) // key할 값이 없다면 index 삽
            }
        </div>
    );
}

export default UserList;