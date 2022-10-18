import React from 'react';
import { Link } from 'react-router-dom';

const RouterMain = () => {
    return (
        <div>
            <h3>메인 페이지입니다.</h3>
            <ul>
                {/**useParams를 활용한 컴포넌트 */}
                <Link to="/product/1"><li>Product.1번 상품</li></Link>
                <Link to="/product/2"><li>Product.2번 상품</li></Link>
                {/**useParams, useLocation을 활용한 컴포넌트 */}
                <Link to="/product2/1"><li>Product.1번 상품</li></Link>
                <Link to="/product2/2"><li>Product.2번 상품</li></Link>
            </ul>
        </div>
    );
};

export default RouterMain;