import UserList from "./UserList";
import {useRef, useState} from 'react';
import CreateUser from "./CreateUser";

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });
    const {username, email} = inputs;
    const onChange = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const [users, setUsers] = useState([
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
    ]);

    const nextId = useRef(4); // 컴포넌트안의 기억되는 변수 (변수가 바뀐다고해서 리랜더링 X)

    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email
        };
        setUsers([...users, user]); // 기존의 users를 복사해서 새항목 추가
        // setUsers(users.concat(user)); // 위와 같은 기능
        setInputs({
            username: '',
            email: '',
        });

        nextId.current += 1;
    }

    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} />
        </>
    );
}

export default App;
