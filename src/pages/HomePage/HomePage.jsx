import React from 'react';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import HompageBanner from '../../components/Banner/HompageBanner';
import Gallery from '../../components/Gallery/Gallery';
import Companies from '../../components/Companies/Companies';
import About from '../../components/About/About';

const HomePage = () => {
    useDynamicTitle('Home')
    return (
        <div>
            <HompageBanner></HompageBanner>
            <Gallery></Gallery>
            <About></About>
            <Companies></Companies>

        </div>
    );
};

export default HomePage;