import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({alltoy}) => {
    // console.log(alltoy)
    const {name, toyName, subCategory, price, quantity, _id}= alltoy;
    return (
        <tr>
            <td>{name}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/toydetails/${_id}`} className='btn btn-outline-success fw-semibold'>View Details</Link></td>
         </tr>
    );
};

export default AllToysRow;