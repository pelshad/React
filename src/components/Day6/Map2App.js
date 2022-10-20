import React from 'react';
import Map2 from './Map2';

const App = () => {
    const users = [
        {name : 'Hong', age : 30},
        {name : 'Kim', age : 24},
        {name : 'Song', age : 21},
        {name : 'Lee', age : 34}
    ]
    let userFilter = users.filter((v) => v.age < 25); //필터처리 하여 age가 25이하인 객체를 재배열
    const userList = userFilter.map((v) => <Map2 key={v.name} name={v.name} age={v.age}/>);

    
        
    
    return (
        <div>
            {userList}
        </div>
    );
};

export default App;