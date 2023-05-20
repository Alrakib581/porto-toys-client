import React from 'react';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import HompageBanner from '../../components/Banner/HompageBanner';
import Gallery from '../../components/Gallery/Gallery';
import Companies from '../../components/Companies/Companies';
import About from '../../components/About/About';
import CategorySection from '../../components/CategorySection/CategorySection';

const HomePage = () => {
    useDynamicTitle('Home')
    return (
        <div>
            <HompageBanner></HompageBanner>
            <Gallery></Gallery>
            <CategorySection></CategorySection>
            <About></About>
            <Companies></Companies>

        </div>
    );
};

export default HomePage;