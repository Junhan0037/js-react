import React from "react";

function Hello({color, name, isSpecial}) {
    return (
        <div style={{
            color
        }}>
            {isSpecial && <b>*</b>}
            안녕하세요. {name}
        </div>
    )
}

Hello.defaultProps = { // props 기본값
    name: '이름없음'
}
export default Hello;