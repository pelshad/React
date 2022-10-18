import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Day5/RouteHeader';
import Main from './components/Day5/RouteMain';
import Product from './components/Day5/RouteProduct';
import NotFound from './components/Day5/RouteNotFound';

const App = () => {
    //라우터 형태
    //<BrowserRouter>                                     :: 라우터를 사용하기 위한 부모 태그
    // <Routes>                                           :: 여러 Route를 감싸 그 중 규칙이 일치하는 Route를 렌더링
    //   <Route path="/" element={<컴포넌트명 />}></Route> :: path="/지정할 url명"
    //   <Route path="*" element={<NotFound />}</Route>   :: 라우트 규칙에 없는 url로 접속시 에러처리할 컴포넌트
    // </Routes>
    //</BrowserRouter>

    //Link to
    //다른 페이지와 연결해주는 컴포넌트
    //<Link>와 관련된 내용은 RouteMain.js 참고

    //useParams
    //다른 페이지와 연결시 파라미터값 전송하는 컴포넌트
    //useParams 관련된 내용은 RouteProduct.js 참고
    //보내는쪽(main)에서는 path='/:받는 파라미터 변수명'으로 작성

    //useLocation(useParams 대체 사용 가능)
    //

    return (
        <div>
            <div className='App'>
                <BrowserRouter> 
                    <Header />
                    <Routes>
                        <Route path='/' element={<Main />}></Route>
                        <Route path='/product/:productId' element={<Product />}></Route>
                        <Route path='*' element={<NotFound />}></Route>
                    </Routes>
                    
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;