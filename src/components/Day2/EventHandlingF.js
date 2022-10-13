import React, {useState} from 'react';

const EventHandlingF = () => {
    // 하드코딩 ver.
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');

    // //함수형으로 메소드 사용시 const 사용
    // const ChangeUser = e => {
    //     setUsername(e.target.value);
    // }

    // const ChangeMessage = e => {
    //     setMessage(e.target.value);
    // }

    // const handleClick = () => {
    //     alert(username + " : " + message);
    //     setMessage('');
    // }

    // const pressKey = e => {
    //     if(e.key === 'enter'){
    //         handleClick();
    //     }
    // }

    //각 값을 form에 담음
    //set,use에 값을 여럿 넣을시 set변수병({}), useState({})처럼 객체형으로 사용
    const [form, setForm] = useState({
        username:'',
        message:''
    });
    const { username, message } = form;
    const changeForm = e => {
        const nextForm = {
            ...form, //form을 푸는거
            [e.target.name] : e.target.value, //form 각 필드에 값 넣기
        };
        setForm(nextForm); //nextData의 값들을 setForm에 넣기
    }

    const handleClick = () => {
        alert(username+" : "+message);
        setForm({ //각 값을 초기화
            username:'',
            message:''
        })
    }

    const pressKey = e => {
        if(e.key === 'enter'){
            handleClick();
        }
    }

    return (
        <div>
            <input 
            type="text"
            name="username"
            value={username}
            onChange={changeForm} />
            <input 
            type="text"
            name="message"
            value={message}
            onChange={changeForm} />
            <button
            onClick={handleClick}
            onKeyPress={pressKey}>send</button>
        </div>
    );
};

export default EventHandlingF;