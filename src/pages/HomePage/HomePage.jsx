import React from 'react';
import useDynamicTitle from '../../hooks/useDynamicTitle';

const HomePage = () => {
    useDynamicTitle('home')
    return (
        <div>
            <h2>Home page</h2>
        </div>
    );
};

export default HomePage;