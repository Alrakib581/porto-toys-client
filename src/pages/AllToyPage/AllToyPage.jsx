import React from 'react';
import './AllToyPage.css';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useDynamicTitle from '../../hooks/useDynamicTitle';

const AllToyPage = () => {
    useDynamicTitle('All Toys')
    return (
        <div className=''>
            <div className='text-center mb-5 bg-light py-5 rounded'>
                <h3 className='company-name fw-bold'>All Toys </h3>
                <p className='company-name fw-semibold'>Here You can see All Toys That Our Users Added. <br /> Also You can search a toy By toy Name.</p>
             <Form className='form-container container py-4'>
                <div className="form-content d-flex justify-content-center">
                    <input placeholder='search by toy name' className='w-50 p-2 fs-5 rounded' type="text" />
                    <input className='w-25 p-2 fs-5 btn btn-outline-dark rounded ms-2' type="submit" value='Search' />
                 </div>
            </Form>
            </div>
            <div className='container overflow-auto  my-5 '>
                <Table className='' striped bordered hover>
                    <thead className=''>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <td>Abdulla Al Rakib</td>
                            <td>Police Car</td>
                            <td>Trucks</td>
                            <td>200 Taka</td>
                            <td>190 pice</td>
                            <td><Link className='text-dark fw-semibold'>View Details</Link></td>
                        </tr>
                        <tr>
                            <td>Abdulla Al Rakib</td>
                            <td>Police Car</td>
                            <td>Trucks</td>
                            <td>200 Taka</td>
                            <td>190 pice</td>
                            <td><Link className='text-dark fw-semibold'>View Details</Link></td>
                        </tr>
                        <tr>
                            <td>Abdulla Al Rakib</td>
                            <td>Police Car</td>
                            <td>Trucks</td>
                            <td>200 Taka</td>
                            <td>190 pice</td>
                            <td><Link className='text-dark fw-semibold'>View Details</Link></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AllToyPage;