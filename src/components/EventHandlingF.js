import React, {useState} from 'react';

const EventHandlingF = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    //함수형으로 메소드 사용시 const 사용
    const ChangeUser = e => {
        setUsername(e.target.value);
    }

    const ChangeMessage = e => {
        setMessage(e.target.value);
    }

    const handleClick = () => {
        alert(username + " : " + message);
        setMessage('');
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
            onChange={ChangeUser} />
            <input 
            type="text"
            name="message"
            value={message}
            onChange={ChangeMessage} />
            <button
            onClick={handleClick}
            onKeyPress={pressKey}>send</button>
        </div>
    );
};

export default EventHandlingF;