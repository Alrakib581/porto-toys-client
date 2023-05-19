import React from 'react';
import useDynamicTitle from '../../hooks/useDynamicTitle';

const MyToys = () => {
    useDynamicTitle('My Toys')
    return (
        <div>
            <h1>My All Toys</h1>
            
        </div>
    );
};

export default MyToys;