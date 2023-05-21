import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const ToyDetailsPage = () => {
    const details = useLoaderData();
    // console.log(details)
    const { email, message, name, price, quantity, rating, subCategory, url, toyName, _id } = details;
    return (
        <div className=' mb-5'>
            <div className='bg-light text-center company-name py-5'>
                <h2 className='fw-bold'>Single Toy Details</h2>
                <p className='fw-semibold'>Here you can see a single toy information.</p>
            </div>
            <div className='container py-5'>
                <div className="row">
                    <div className="col-md-6">
                        <div className='border rounded p-4'>
                            <img className='img-fluid rounded' src={url} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='card rounded company-name fw-semibold p-4'>
                            <h5>{toyName}</h5>
                            <p>{price} Taka</p>
                            <p> category : {subCategory}</p>
                            <p>Available Quantity {quantity} pc</p>
                            <p>{message} lorem200</p>
                            <p>{rating}</p>
                            <p> <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>} /></p>
                        </div>
                    </div>
                </div>
                <div className='card m-2 p-4 text-success fw-semibold text-center'>
                    <h5>Seller Name: {name}</h5>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetailsPage;