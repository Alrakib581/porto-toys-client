import React from 'react';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import { Card } from 'react-bootstrap';

const Blogpage = () => {
    useDynamicTitle('Blog')
    return (
        <div className='my-5'>

            <div className='container'>
                <Card>
                    <div className='row d-md-flex justify-content-center align-items-center'>
                        <div className="col-md-4">
                            <img className='img-fluid' src="https://cdn.pixabay.com/photo/2018/11/10/02/42/cloud-3805852_640.png" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h5>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h5>
                            <p>Access Token: An access token is a credential that is used to access protected resources, such as APIs or web services. It is typically issued by an authentication server, after a user successfully authenticates and authorizes an application. The access token is a string that contains information about the user's identity and permissions.</p>
                            <p>
                                Refresh Token: A refresh token is a long-lived credential that is also issued by the authentication server. Its purpose is to obtain a new access token when the current one expires. Unlike access tokens, refresh tokens are not sent with each request to the protected resource. Instead, they are securely stored on the client-side and used to request a new access token from the authentication server when needed.
                            </p>
                        </div>
                    </div>
                </Card>
                <br />
                <Card>
                    <div className='row d-md-flex justify-content-center align-items-center'>
                        <div className="col-md-4">
                            <img className='img-fluid' src="https://cdn.pixabay.com/photo/2018/11/10/02/42/cloud-3805852_640.png" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h5>Compare SQL and NoSQL databases?</h5>
                            <p>SQL: SQL databases follow a structured, tabular data model known as the relational model. Data is organized into tables with predefined schemas, and relationships between tables are established using keys.
                                NoSQL: NoSQL databases use various data models, such as key-value, document, columnar, or graph. They provide flexibility in organizing and storing data, allowing for dynamic schemas and the ability to handle unstructured or semi-structured data.</p>
                        </div>
                    </div>
                </Card>
                <br />
                <Card>
                    <div className='row d-md-flex justify-content-center align-items-center'>
                        <div className="col-md-4">
                            <img className='img-fluid' src="https://cdn.pixabay.com/photo/2018/11/10/02/42/cloud-3805852_640.png" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h5>What is express js? What is Nest JS</h5>
                            <p>Express.js  Express.js is a minimalist, fast, and unopinionated web application framework for Node.js. It provides a straightforward and flexible approach to building web applications and APIs.
                                It is known for its simplicity and lightweight nature, allowing developers to have fine-grained control over the application's structure and behavior.</p>
                            <p>
                                Nodejs
                                Nest.js is a progressive, extensible, and opinionated framework for building scalable server-side applications with TypeScript. It is built on top of Express.js and adds a layer of structure and organization to the application.
                                Nest.js is inspired
                            </p>
                        </div>
                    </div>
                </Card>
                <br />
                <Card>
                    <div className='row d-md-flex justify-content-center align-items-center'>
                        <div className="col-md-4">
                            <img className='img-fluid' src="https://cdn.pixabay.com/photo/2018/11/10/02/42/cloud-3805852_640.png" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h5>What is MongoDB aggregate and how does it work</h5>
                            <p>Aggregations operations process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result. In SQL count(*) and with group by is an equivalent of MongoDB aggregation..</p>
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default Blogpage;