import React from 'react';
import './HomepageBanner.css';
import bannerOneImage from '../../../public/bannerOne.jpg'
import bannerTwoImage from '../../../public/bannerTwo.jpg'
import { Carousel } from 'react-bootstrap';

const HompageBanner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item className='position-relative'>
                    <img className="d-block w-100"
                        src={bannerTwoImage}  alt="Banner Image" />
                    <div className='position-absolute  top-50 start-50 translate-middle text-light text-center'>
                        <h3 className='fs-1'>Online Toy marketplace In  Bangladesh</h3>
                        <p>Sell toy and earn money without any hasitient. <span className='text-warning'>seller service Available 24/7</span></p>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='position-relative'>
                    <img className="d-block w-100"
                        src={bannerOneImage} alt="Banner Image" />
                     <div className='position-absolute  top-50 start-50 translate-middle text-light text-center'>
                        <h3 className='fs-1'>Best seller services We Provide</h3>
                        <p>Sell toy and earn money without any hasitient. <span className='text-warning'>seller service Available 24/7</span></p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HompageBanner;