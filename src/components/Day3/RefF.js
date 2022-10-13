import React, { useState } from 'react';
import './ref.css';

const RefF = () => {
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleChange = e => {
        setPassword(e.target.value);
    }

    const handleClick = () => {
        setCheck(true);
        setValidated(password == '0000');
    }

    
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