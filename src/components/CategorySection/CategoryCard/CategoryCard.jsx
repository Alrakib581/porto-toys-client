import React from 'react';
import './CategoyrCard.css'
import { Link } from 'react-router-dom';

const CategoryCard = ({toy}) => {
    console.log(toy)
    const {url,toyName,rating,price,} = toy;
    return (
        <div className=' col-sm-6 col-md-4 col-lg-3'>
          <div className="border p-2 rounded">
          <div className='card-img'>
                <img  className='img-fluid rounded' src={url} alt="" />
            </div>
            <div className='mt-3'>
                <h5>{toyName}</h5>
                <p>Price: {price} Taka</p>
                <p>Rattings: {rating}</p>
                <Link className='btn btn-outline-dark'>View Details</Link>
            </div>
          </div>
        </div>
    );
};

export default CategoryCard;