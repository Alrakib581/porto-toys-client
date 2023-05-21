import React from 'react';

const About = () => {
    return (
        <div>
            <div className="container my-5">
                <h4 className='text-center company-name text-decoration-underline'>About Us</h4>
                <div className="row p-4 d-flex align-items-center">
                    <div className="col-md-6">
                        <div className='card border-0'>
                            <p className='company-name'>Welcome to Porto Sport Toy Company! We are a passionate and innovative toy company dedicated to creating magical experiences for children of all ages. With our wide range of enchanting toys and games, we aim to inspire imagination, promote learning, and bring joy to every playtime moment. we understand the importance of play in a child's development. That's why we design our toys to not only be fun but also educational, encouraging creativity, problem-solving, and social interaction. We believe that through play, children can explore, learn, and grow, and we strive to provide them with the tools they need to do so.
                                Our team of talented designers and engineers work tirelessly to craft toys that capture the hearts and minds of children. We carefully select the finest materials, ensuring our products are safe, durable, and built to withstand the test of time. From classic favorites to innovative new concepts, our toy collection offers something for every child's unique interests and preferences.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='card border-0'>
                            <img src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-669.jpg?size=626&ext=jpg&ga=GA1.1.1321952685.1675488582&semt=ais" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;