import React, { useEffect, useState } from 'react';

const useEffect = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Hong");
    const countUp = () => setCount(count + 1);
    const handleChangeName = (e) => setName(e.target.value);

    //변화가 있을때 마다 실행 :: useEffect(() => {})
    // useEffect(() => {
    //     console.log("useEffect!!", count);
    // })


    //최초 렌더링시에만 실행 :: useEffect(() => {},[])
    // useEffect(() => {
    //     console.log("useEffect!!", count);
    // },[])

    //특정 값이 변경될 때만 실행
    // useEffect(() => {
    //     console.log("useEffect!!", count);
    // }, [count]); //count의 값이 변경 될때만 useEffect 실행

    //cleanup 함수
    // useEffect안에서 return 할 때 실행(useEffect의 뒷정리)
    // 만약 컴포넌트가 마운트 될 때 이벤트 리스너를 통해 이벤트를 추가하였다면 컴포넌트가 언마운트 될 때 이벤트를 삭제 해주어야 한다.
    // 그렇지 않으면 컴포넌트가 리렌더링 될 때마다 새로운 이벤트 리스너가 핸들러에 바인딩 될 것이다. 
    // 이는 자주 리렌더링 될 경우 메모리 누수가 발생할 수 있다.
    // cleanup함수에는 렌더링 되기전 이전값을 불러온다 :: 이전 값이 필요할 경우 활용 가능

    useEffect(() => {
        console.log("useEffect!!", count);

        //cleanup
        return() => {
            console.log("clenUp!!", count);
        }
        //
    }, [count]);

    return (
        <div>
            <p>안녕하세요. {name}입니다.</p>
            <input type="text" onChange={handleChangeName} />
            <p>{count} 클릭</p>
            <button onClick={countUp}>Click Me</button>
        </div>
    );
};

export default useEffect;