import React, { useState } from 'react';
import { HiOutlineXCircle } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ToysRow = ({toys,newToys,setnewToys}) => {
    const { name, toyName, subCategory, price, quantity, email, rating, _id } = toys;
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
                fetch(`http://localhost:5000/toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                        }
                        const remaining = newToys.filter(td => td._id !== _id)
                        setnewToys(remaining);
                    })
            }
        })
    }
    return (
        <>
            <tr className=''>
                <td>{toyName}</td>
                <td>{subCategory}</td>
                <td>{price} taka</td>
                <td>{quantity} pice</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{rating}</td>
                <td>
                    <Link className='btn btn-outline-success' to={`/updateToy/${_id}`}>Update</Link>
                    <button onClick={()=> handleDelete(_id)} className='btn'><HiOutlineXCircle className='fs-1 text-danger'></HiOutlineXCircle></button>
                </td>
            </tr>
        </>
    );
};

export default ToysRow;