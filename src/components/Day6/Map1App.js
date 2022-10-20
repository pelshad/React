import React from 'react';
import Map1 from './Map1';

const App = () => {
	// react에서는 for문 사용 불가능. => js의 map메소드를 이용하여 for문을 돌린다.
  const names = [
    ["test1","테스트1"], 
    ["test2","테스트2"], 
    ["test3","테스트3"]] //각 값을 정의
	//객체도 동일하게 적용 가능

	const nameList = names.map((item) => (<Map1 name={item[0]} name2={item[1]}/>)) // Map1(Day6/Map1.js) 컴포넌트에 props
	return (
		<div>
			{nameList}
		</div>
	);
}

export default App;