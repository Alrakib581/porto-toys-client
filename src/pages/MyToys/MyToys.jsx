import React, { useEffect, useState } from 'react';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import { Table } from 'react-bootstrap';
import ToysRow from './ToysRow';
import { useLoaderData } from 'react-router-dom';

const MyToys = () => {
    useDynamicTitle('My Toys')
    const loadedToys = useLoaderData()
    const [newToys, setnewToys] = useState(loadedToys)
    // console.log(newToys)
    return (
        <div>
            <div className='bg-light py-5 text-center company-name'>
                <h2 className='fw-bold'>My Toys</h2>
                <p>Here Your Toy list that you added. You can update the toy information.</p>
            </div>
            <div>
            <div className='container overflow-auto  my-5 '>
                <div> <h5 className='text-center mb-4'>Total found {loadedToys.length} item</h5></div>
                <Table hover>
                    <thead className='text-center'>
                        <tr>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Sellar Name</th>
                            <th>Seller Email</th>
                            <th>Rating</th>
                            <th>Update or Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                      {
                        newToys.map(toys =>  <ToysRow
                        toys={toys}
                        key={toys._id}
                        newToys={newToys}
                        setnewToys={setnewToys}
                        >

                        </ToysRow>)
                      }
                    
                 </tbody>
                </Table>
            </div>
            </div>
        </div>
    );
};

export default MyToys;