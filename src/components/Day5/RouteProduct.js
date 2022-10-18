import React from 'react';
import { useParams } from 'react-router-dom'; //URL 파라미터 값 받는 컴포넌트
import { useNavigate } from 'react-router-dom';

const RouteProduct = () => {
    const { productId } = useParams(); //URL 파라미터를 담을 변수
    const navigate = useNavigate(); //별도의 link컴포넌트 없이 간단한 페이지 이동을 위한 navigate 기능

    return (
        <>
            <div>
                <h3>{productId}번 상품 페이지입니다.</h3>
            </div>
            <ul>
                <li><button onClick={() => navigate(-2)}>Go 2 pages back</button></li>
                <li><button onClick={() => navigate(-1)}>Go Back</button></li>
                <li><button onClick={() => navigate(1)}>Go forward</button></li>
                <li><button onClick={() => navigate(2)}>Go 2 pages forward</button></li>
                <li><button onClick={() => navigate('/')}>Go Root</button></li>
                <li><button onClick={() => navigate('/', {replace: true})}>Go Root</button></li>
            </ul>
        </>
    );
};

export default RouteProduct;