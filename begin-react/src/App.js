import UserList from "./UserList";
import {useRef, useState, useMemo} from 'react';
import CreateUser from "./CreateUser";

function CountActiveUsers(users) {
    console.log("활성 사용자 수를 세는중...");
    return users.filter(user => user.active).length;
}

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
            active: true,
        },
        {
            id: 2,
            username: 'def',
            email: 'public.def@gmail.com',
            active: false,
        },
        {
            id: 3,
            username: 'ghi',
            email: 'public.ghi@gmail.com',
            active: false,
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
    };

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id)); // id와 다르면 false를 반환하며 제거 (제거 기능에서는 기존의 배열 복사 필요 X)
    };

    const onToggle = id => {
        setUsers(users.map(user => user.id === id
        ? {...user, active: !user.active}
        : user
        ))
    };

    const count = useMemo(() => CountActiveUsers(users), [users]); // users가 바뀔 때만 호출 (성능 최적화)

    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성 사용자 수 : {count}</div>
        </>
    );
}

export default App;
