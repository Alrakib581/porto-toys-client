import React from 'react';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import { Table } from 'react-bootstrap';
import { HiOutlineXCircle } from "react-icons/hi2";

const MyToys = () => {
    useDynamicTitle('My Toys')
    return (
        <div>
            <div className='bg-light py-5 text-center company-name'>
                <h2 className='fw-bold'>My Toys</h2>
                <p>Here Your Toy list that you added. You can update the toy information.</p>
            </div>
            <div>
            <div className='container overflow-auto  my-5 '>
                <Table hover>
                    <thead className='text-center'>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Update or Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <td>Abdulla Al Rakib</td>
                            <td>Police Car</td>
                            <td>Trucks</td>
                            <td>200 Taka</td>
                            <td>190 pice</td>
                            <td>
                                <button className='btn btn-outline-success'>Update</button>
                                <button className='btn'><HiOutlineXCircle className='fs-1 text-success'></HiOutlineXCircle></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Abdulla Al Rakib</td>
                            <td>Police Car</td>
                            <td>Trucks</td>
                            <td>200 Taka</td>
                            <td>190 pice</td>
                            <td>
                                <button className='btn btn-outline-success'>Update</button>
                                <button className='btn'><HiOutlineXCircle className='fs-1 text-success'></HiOutlineXCircle></button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            </div>
        </div>
    );
};

export default MyToys;