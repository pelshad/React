import React from 'react';

//부모가 보낸 props의 값을 파라미터로 받아옴(파라미터값은 아무거나 입력해도됨)
const Props  = ({ name, stateSpec }) => {
    return (
        <div>
            {name},{stateSpec}
        </div>
    );
};


export default Props ;