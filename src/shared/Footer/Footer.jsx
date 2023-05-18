import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-bg py-4'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-md-3">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-md-3">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Feel free to contact</h5>
                        <form>
                            <input className='form-control' type="email" placeholder='Your Email' />
                            <input className='btn btn-secondary mt-2' type="submit" value='Submit' />
                        </form>
                    </div>
                </div>
            </div>
            <hr />
            <div className='text-center'>

                <p>Porto Toy & Co. &copy; All Rights Reserved | 2014-2023</p>
                <p>Technical Assistant and developed by</p>
                <a className='fw-semibold text-light' target='_blank' href="http://www.rakibbhai.com"> rakib0157</a>
            </div>
        </div>
    );
};

export default Footer;