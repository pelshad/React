import React from 'react';
import { useParams } from 'react-router-dom'; //URL 파라미터 값 받는 컴포넌트
import { useLocation } from 'react-router-dom';

//http://localhost:3000/product2/1?search=productName&q=demo#test 주소로 접속

const RouteProduct2 = () => {
    const productId = useParams().productId;
    const location = useLocation();
    
    return (
        <div>
            <h3>{productId}번 상품 페이지입니다.</h3>
            <ul>
                <li>hash : {location.hash}</li>
                <li>pathname : {location.pathname}</li>
                <li>state : {location.state}</li>
                <li>key : {location.key}</li>
            </ul>
        </div>
    );
};

export default RouteProduct2;