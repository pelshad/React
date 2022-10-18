import React from 'react';
import {Link} from 'react-router-dom';

const RouteHeader = () => {
    return (
        <div>
            <Link to="/">
                <h1>헤더입니다.</h1>
            </Link>
        </div>
    );
};

export default RouteHeader;