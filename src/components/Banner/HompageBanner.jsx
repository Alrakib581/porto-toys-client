import React from 'react';
import './HomepageBanner.css';
import bannerOneImage from '../../../public/bannerOne.png'
import bannerTwoImage from '../../../public/bannerTwo.png'
import { Carousel } from 'react-bootstrap';

const HompageBanner = () => {
    return (
        <div className=''>
            <Carousel fade>
                <Carousel.Item className='py-5 bg-light'>
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <div className=''>
                                    <h3 className='fs-1 fw-bold company-name'>Online Toy marketplace In  Bangladesh</h3>
                                    <p className='mt-4 fw-semibold'>Sell toy and earn money without any hasitient. We provide you a sef sport toy seller market place in Bangladesh. Product is yours and advirtisment and tension for sell is our. you can trust with your best sport toy product. <span className='text-danger'>seller service Available 24/7</span></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className='img-fluid' src={bannerOneImage} alt="" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='py-5 bg-light'>
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <div className=''>
                                    <h3 className='fs-1 fw-bold company-name'>Online Toy marketplace In  Bangladesh</h3>
                                    <p className='mt-4 fw-semibold'>Sell toy and earn money without any hasitient. We provide you a sef sport toy seller market place in Bangladesh. Product is yours and advirtisment and tension for sell is our. you can trust with your best sport toy product. <span className='text-danger'>seller service Available 24/7</span></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className='img-fluid' src={bannerTwoImage} alt="" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>            
            </Carousel>
        </div>
    );
};

export default HompageBanner;