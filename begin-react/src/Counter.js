import React, {useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1); // number + 1 와 기능은 같으나 최적화 되어있다. (함수형 업데이트)
    };
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;