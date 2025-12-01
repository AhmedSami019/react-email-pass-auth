import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <h2>this is root</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;