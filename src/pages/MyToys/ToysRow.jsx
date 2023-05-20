import React from 'react';
import { HiOutlineXCircle } from 'react-icons/hi2';
import Swal from 'sweetalert2';

const ToysRow = ({toy}) => {
    // console.log(toy)
    const {name, toyName, subCategory, price, quantity, email, rating,_id} = toy;
    const handleDelete =(_id)=>{
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
                //   Swal.fire(
                    //     'Deleted!',
                    //     'Your file has been deleted.',
                    //     'success'
                    //   )
                    console.log('delet confirm')
                }
            })
    }
    return (
        <tr className=''>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price} taka</td>
            <td>{quantity} pice</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rating}</td>
            <td>
                <button className='btn btn-outline-success'>Update</button>
                <button onClick={()=>handleDelete(_id)} className='btn'><HiOutlineXCircle className='fs-1 text-danger'></HiOutlineXCircle></button>
            </td>
       </tr>
    );
};

export default ToysRow;