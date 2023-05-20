import React, { useEffect, useState } from 'react';
import './AllToyPage.css';
import { Form, InputGroup, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import AllToysRow from './AllToysRow';

const AllToyPage = () => {
    useDynamicTitle('All Toys')
    const [alltoys, setAllToys] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data =>{
            setAllToys(data)
        })
    },[])
    // console.log(alltoys)
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
                    <thead className='text-center'>
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
                       {
                        alltoys.map(alltoy => <AllToysRow
                                key={alltoy._id}
                                alltoy={alltoy}
                        ></AllToysRow>)
                       }
                       
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AllToyPage;