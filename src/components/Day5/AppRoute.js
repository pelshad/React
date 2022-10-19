import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Day5/RouteHeader';
import Main from './components/Day5/RouteMain';
import Product from './components/Day5/RouteProduct';
import Product2 from './components/Day5/RouteProduct2';
import NotFound from './components/Day5/RouteNotFound';

const App = () => {
    //참고 사이트https://goddaehee.tistory.com/m/305
    //1. 라우터 형태
    //<BrowserRouter>                                     :: 라우터를 사용하기 위한 부모 태그
    // <Routes>                                           :: 여러 Route를 감싸 그 중 규칙이 일치하는 Route를 렌더링
    //   <Route path="/" element={<컴포넌트명 />}></Route> :: path="/지정할 url명"
    //   <Route path="*" element={<NotFound />}</Route>   :: 라우트 규칙에 없는 url로 접속시 에러처리할 컴포넌트
    // </Routes>
    //</BrowserRouter>

    //2. Link to
    //다른 페이지와 연결해주는 컴포넌트
    //<Link>와 관련된 내용은 RouteMain.js 참고

    //3. useParams
    //다른 페이지와 연결시 파라미터값 전송하는 컴포넌트
    //useParams 관련된 내용은 RouteProduct.js 참고
    //보내는쪽(main)에서는 path='/:받는 파라미터 변수명'으로 작성

    //3-1. useLocation(useParams 대체 사용 가능)
    //useLocation 관련된 내용은 RouteProduct2.js참고

    //3-2. useSearchParams도 있음(나중에 할래 귀찮음)

    //4.useNavigate
    //Link 컴포넌트를 사용하지 않고 다른 페이지 이동 (ex. 뒤로가기 etc)
    //replace 옵션 사용시 히스토리를 남기지 않음
    //import useNavigate 이후 변수에 useNavigate() 메소드 담기( 안담아도 바로 사용가능?)
    //파라미터 값에 담은 값에 따라 페이지 이동 -2 -> 페이지 2번 전으로, '/' 루트 페이지로

    return (
        <div>
            <div className='App'>
                <BrowserRouter> 
                    <Header />
                    <Routes>
                        <Route path='/' element={<Main />}></Route>
                        <Route path='/product/:productId' element={<Product />}></Route>
                        <Route path='/product2/:productId' element={<Product2 />}></Route>
                        <Route path='*' element={<NotFound />}></Route>
                    </Routes>
                    
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;