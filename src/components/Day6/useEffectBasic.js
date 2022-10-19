import React, { useEffect, useState } from 'react';

const useEffectBasic = () => {
    const [count, setCount] = useState(0);
    //useEffect? :: 변화(create, unmounted, mounted, updated)가 생겼을 때 동작하는 기능?
    //useEffect코드는 클릭 할 때마다 title에 `You clicked ${count} times`가 변함
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={() => setCount(count+1)}>
                Click me
            </button>
        </div>
    );
};

export default useEffectBasic;