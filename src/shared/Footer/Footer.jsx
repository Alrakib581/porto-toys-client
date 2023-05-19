import React, { useEffect, useState } from 'react';
import './Footer.css'
import FooterCard from '../FooterCard/FooterCard';

const Footer = () => {
    const [footerData, setFooterData] = useState([])
  useEffect(()=>{
    fetch('https://porto-server-rakib0157.vercel.app/footer')
    .then(res=> res.json())
    .then(data =>{
        // console.log(data)
        setFooterData(data)
    })
  },[])  
    return (
        <div className='bg-light footer py-4'>
            <div className='container'>
                <div className="row">
                   {
                    footerData.map(fData => <FooterCard
                    key={fData._id}
                    fData={fData}
                    ></FooterCard>)
                   }
                    <div className="col-md-3">
                        <h5>Feel free to contact</h5>
                        <form>
                            <input className='form-control' type="email" placeholder='Your Email' />
                            <input className='btn btn-outline-dark w-25 mt-2' type="submit" value='Submit' />
                        </form>
                    </div>
                </div>
            </div>
            <hr />
            <div className='text-center'>

                <p>Porto Toy & Co. &copy; All Rights Reserved | 2014-2023</p>
                <p>Technical Assistant and developed by <br />
                <a className='fw-semibold text-dark' target='_blank' href="http://www.rakibbhai.com"> rakib0157</a></p>
            </div>
        </div>
    );
};

export default Footer;