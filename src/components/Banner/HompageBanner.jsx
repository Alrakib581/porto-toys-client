import React from 'react';
import './HomepageBanner.css';
import bannerOneImage from '../../../public/bannerOne.png'
import bannerTwoImage from '../../../public/bannerTwo.png'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HompageBanner = () => {
    return (
        <div className='banner'>
            <Carousel interval={3000} fade>              
                <Carousel.Item style={{zIndex:'5'}}  className='py-5'>
                    <div  className='container'>
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <div className=''>
                                    <h3 className='fs-1 fw-bold company-name'>Best Seller Services We Provide for marchandise.</h3>
                                    <p className='mt-4 fw-semibold'>Sell toy and earn money without any hasitient. We provide you a sef sport toy seller market place in Bangladesh. Product is yours and advirtisment and tension for sell is our. you can trust with your best sport toy product. <span className='text-danger'>seller service Available 24/7</span></p>
                                    <Link to='/alltoys' className='btn btn-outline-dark'>Explore Toys</Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className='img-fluid' src={bannerTwoImage} alt="" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item style={{zIndex:'5'}}  className='py-5'>
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <div className=''>
                                    <h3 className='fs-1 fw-bold company-name'>Online Toy marketplace In  Bangladesh.</h3>
                                    <p className='mt-4 fw-semibold'>Sell toy and earn money without any hasitient. We provide you a sef sport toy seller market place in Bangladesh. Product is yours and advirtisment and tension for sell is our. you can trust with your best sport toy product. <span className='text-danger'>seller service Available 24/7</span></p>
                                    <Link to='/alltoys' className='btn btn-outline-dark'>Explore Toys</Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className='img-fluid' src={bannerOneImage} alt="" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HompageBanner;