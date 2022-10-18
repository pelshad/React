import React, { useState } from 'react';

const Map2 = () => {
    const [names, setNames] = useState([
        {id: 1, text: 'snowman'},
        {id: 2, text: 'ice'},
        {id: 3 ,text: 'snow' },
        {id: 4, text: 'wind'}
    ])
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const nameList = names.map(name => <li key={name.id}>{name.text}</li>);

    const changeText = e => setInputText(e.target.value);
    const insertName = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    return (
        <div>
            <ul>{nameList}</ul>
            <input 
            type="text"
            value={inputText}
            onChange={changeText}
             />
            <button onclick={insertName}></button>
        </div>
    );
};

export default Map2;