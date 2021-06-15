import React, {useReducer, useContext, useRef} from "react";

const initialTodos = [
    {
        id: 1,
        text: '아침 산책',
        done: true
    },
    {
        id: 2,
        text: '오늘의 뉴스 읽기',
        done: true
    },
    {
        id: 3,
        text: '샌드위치 사 먹기',
        done: false
    },
    {
        id: 4,
        text: '리액트 공부하기',
        done: false
    }
]

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo);
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = React.createContext();
const TodoDispatchContext = React.createContext();
const TodoNextIdContext = React.createContext();

export function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState() {
    return TodoContext(TodoStateContext);
}

export function useTodoDispatch() {
    return TodoContext(TodoDispatchContext);
}

export function useTodoNextId() {
    return TodoContext(TodoNextIdContext);
}

const TodoContext = context => {
    const todoContext = useContext(context); // createContext 사용
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return todoContext;
}