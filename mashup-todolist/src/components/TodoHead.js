import React from "react";
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;
    
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .task-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead() {
    return (
        <TodoHeadBlock>
            <h1>2021년 6월 15일</h1>
            <div className="day">화요일</div>
            <div className="task-left">할 일 2개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;