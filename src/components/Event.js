import React from 'react';

const eventBind = () => {
    
    function handleSubmit(e){
        e.preventDefault();
        //action이 발생하지 않도록 막아 리렌더링을 방지
        //https://narup.tistory.com/190?category=1001170
        console.log('You clicked submit');
    
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default eventBind;