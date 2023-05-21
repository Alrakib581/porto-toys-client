import React from 'react';
import './CategoyrCard.css'
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const CategoryCard = ({ toy }) => {
    // console.log(toy)
    const { url, toyName, rating, price, _id } = toy;
    return (
        <div className=' col-sm-6 col-md-4 col-lg-3'>
            <div className="border p-2 rounded">
                <div className='card-img'>
                    <img className='img-fluid rounded' src={url} alt="" />
                </div>
                <div className='mt-3'>
                    <h5>{toyName}</h5>
                    <p>Price: {price} Taka</p>
                    {/* <p>Rattings: {rating}</p> */}
                    <p> <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>} /></p>
                    <Link to={`toydetails/${_id}`} className='btn btn-outline-dark'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;