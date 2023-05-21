import React, { useContext, useEffect, useState } from 'react';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import { Table } from 'react-bootstrap';
import ToysRow from './ToysRow';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const MyToys = () => {
    useDynamicTitle('My Toys')
    const {user} = useContext(AuthContext);
    const [tdata, setTdata]= useState([])
    // const [ active, setActive] = useState('full')
    
    useEffect(()=>{
        const url = `https://porto-server-rakib0157.vercel.app/mytoys?email=${user?.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setTdata(data)
        })
    },[])

    const handleSbtn =()=>{
        // console.log('cliked')
    }
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure! You want to delete a toy?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5F7161',
            cancelButtonColor: '#333333',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://porto-server-rakib0157.vercel.app/toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                        }
                        const remaining = tdata.filter(td => td._id !== _id)
                        setTdata(remaining);
                    })
            }
        })
    }
    
    return (
        <div>
            <div className='bg-light py-5 text-center company-name'>
                <h2 className='fw-bold'>My Toys</h2>
                <p>Here Your Toy list that you added. You can update the toy information.</p>
                <p className='fw-bold'>Sort by price</p>
                <p><button onClick={handleSbtn} className='btn btn-outline-success'>Low to high</button> <button onClick={handleSbtn} className='btn btn-outline-success'>high to low</button></p>
            </div>
            <div>
            <div className='container overflow-auto  my-5 '>
                <div> <h5 className='text-center mb-4'>Total found {tdata.length} item</h5></div>
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
                        tdata.map(toys =>  <ToysRow
                        toys={toys}
                        key={toys._id}
                        handleDelete={handleDelete}
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