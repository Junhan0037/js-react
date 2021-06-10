import UserList from "./UserList";
import {useRef} from 'react';

function App() {
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

    const nextId = useRef(4); // 컴포넌트안의 기억되는 변수 (변수가 바뀐다고해서 리랜더링 X)

   const onCreate = () => {
        console.log(nextId.current); // 4
        nextId.current += 1;
    }

    return (
        <UserList users={users} />
    );
}

export default App;
