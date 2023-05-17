import React from 'react';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import HompageBanner from '../../components/Banner/HompageBanner';

const HomePage = () => {
    useDynamicTitle('home')
    return (
        <div>
            <HompageBanner></HompageBanner>
        </div>
    );
};

export default HomePage;