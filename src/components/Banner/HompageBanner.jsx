import React from 'react';
import './HomepageBanner.css';
import bannerImg from '../../../public/banner.jpg';

const HompageBanner = () => {
    return (
        <div className='banner'>
            <h2 className='banner-p fw-bold text-center company-name mt-5 '>Best Online Toy marketplace In Bangladesh</h2>
            <p className='text-center fw-semibold company-name'><span className=''>Sell Your sports Toy </span> and earn money without any hasitient.</p>
            <p className='text-center'> <img className='img-fluid banner-img w-75' src={bannerImg} alt="" /></p>
        </div>
    );
};

export default HompageBanner;