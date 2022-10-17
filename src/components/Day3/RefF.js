import React, { useState } from 'react';
import './ref.css';

const RefF = () => {
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [validated, setValidated] = useState(false);

    //메소드 사용 전에 꼭 선언자 사용!
    const handleChange = e => {
        setPassword(e.target.value);
    }

    const handleClick = () => {
        setCheck(true);
        setValidated(password == '0000');
    }

    //react에서 if문은 3항식으로 사용
    return (
        <div>
            <input 
            type="password"
            value={password}
            onChange={handleChange}
            className={check ? (validated ? 'success' : 'failure') : ''} />
            <button onClick={handleClick}>
            send
            </button>
        </div>
    );
};

export default RefF;