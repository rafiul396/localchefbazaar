import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <h2>Hello Navbar</h2>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Root;