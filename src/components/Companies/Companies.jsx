import React from 'react';
import Marquee from 'react-fast-marquee';

const Companies = () => {
    return (
        <div className='container my-5 pt-4 '>
            <div className='container rounded mb-5'>
                <div className=' text-center'>
                    <h4 className='company-name'>Trusted Toy Company</h4>
                </div>
                <div className='row mt-5 pb-3 rounded border'>
                    <Marquee>
                        <div className="p-4">
                            <img style={{width:'300px'}} className='img-fluid' src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg?size=626&ext=jpg&ga=GA1.1.1321952685.1675488582&semt=ais" alt="" />
                        </div>
                        <div className="p-4">
                            <img style={{width:'300px'}} className='img-fluid' src="https://img.freepik.com/free-vector/super-kiddo-logo-text-design_1308-73565.jpg?size=626&ext=jpg&ga=GA1.1.1321952685.1675488582&semt=ais" alt="" />
                        </div>
                        <div className="p-4">
                            <img style={{width:'300px'}} className='img-fluid' src="https://img.freepik.com/free-vector/baby-logo_23-2148030442.jpg?size=626&ext=jpg&ga=GA1.2.1321952685.1675488582&semt=ais" alt="" />
                        </div>
                        <div className="p-4">
                            <img style={{width:'300px'}} className='img-fluid' src="https://img.freepik.com/free-vector/hand-drawn-flat-bounce-house-illustration_23-2149430398.jpg?size=626&ext=jpg&ga=GA1.2.1321952685.1675488582&semt=ais" alt="" />
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Companies;