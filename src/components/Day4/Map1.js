import React from 'react';

const Map1 = () => {
    const names = ['snowman', 'ice', 'snow', 'wind'];
    //const nameList = names.map(name => <li>{name}</li>); // key값이 없다고 console창에 오류 발생,
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    //단 항목의 순서가 바뀔 수 있는 경우 key에 index를 사용하는 것은 권장되지 않음,
    //렌더링한 항목에 대한 안정적인 ID가 없을 때, 최후의 수단으로 index를 key로 사용
    //https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
    
    return (
        <div>
            <ul>{nameList}</ul>
        </div>
    );
};

export default Map1;