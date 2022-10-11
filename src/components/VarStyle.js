import React from 'react';
import '../css/Test.css';

//react에서는 class를 사용하지 않음, className을 사용

function Test(){
    // 변수값 선언
    const name = 'react';
    // 태그에 들어갈 style 설정 객체
    const insStyle = {
        backgroundColor:'black',
        color: 'aqua',
        fontSize: 24,
        padding: '1rem'
    }
    return(
        <>
            <div style={insStyle}>{name}</div>
            <div className='gray-box'></div>
        </>
    );
}

export default Test;