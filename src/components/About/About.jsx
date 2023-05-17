import React from 'react';

const About = () => {
    return (
        <div>
             <div className="container my-5 py-5">
                    <h4 className='text-center company-name text-decoration-underline'>About Us</h4>
           <div className="row  d-md-flex align-items-center">
                <div className="col-md-5">
                    <img className='img-fluid' src="https://img.freepik.com/free-photo/fun-gorilla-3d-illustration_183364-80089.jpg?size=626&ext=jpg&ga=GA1.1.1321952685.1675488582&semt=ais" alt="" />
                </div>
                <div className="col-md-7">
                    <p>Sample text. Click to Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Pharetra magna ac placerat vestibulum. Quam lacus suspendisse faucibus interdum posuere lorem. Egestas tellus rutrum tellus pellentesque eu tincidunt. Neque vitae tempus quam pellentesque nec. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Interdum velit euismod in pellentesque massa placerat duis.

                        Sample text. Click to Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Pharetra magna ac placerat vestibulum. Quam lacus suspendisse faucibus interdum posuere lorem. Egestas tellus rutrum tellus pellentesque eu tincidunt. Neque vitae tempus quam pellentesque nec. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Interdum velit euismod in pellentesque massa placerat duis.</p>
                        <button className='btn btn-outline-dark'>For more Info -&gt;</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default About;