import React,{ useState } from 'react';
// import VarStyle from './components/VarStyle'; //Test.jsx파일 import
// import Event from './components/Event';
// import Clock from './components/Clock';
import Props from './components/Props';

//함수형
 function App(){

  const [count, setCount] = useState(0); //[변수명, set변수명] = useState(선언값);

  function textPrint(){
    console.log({count});
  } 

     return (
      <div>
        <h1>Hello World!</h1>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <button onClick={textPrint}>값 출력</button> {/* textPrint함수 호출 */}
        <Props name="React" stateSpec="high"/>; {/*Mycomponent에 name="React"를 보냄*/}
      </div>
    );
}

export default App;