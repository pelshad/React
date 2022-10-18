import React from 'react';
import { useParams } from 'react-router-dom'; //URL 파라미터 값 받는 컴포넌트

import { useLocation } from 'react-router-dom';


const RouteProduct = () => {
    const { productId } = useParams(); //URL 파라미터를 담을 변수
    return (
        <div>
            <h3>{productId}번 상품 페이지입니다.</h3>
        </div>
    );
};

export default RouteProduct;