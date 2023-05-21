import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useDynamicTitle from '../../hooks/useDynamicTitle';
const UpdatePage = () => {
    const toyData = useLoaderData()
    useDynamicTitle('Update a toy')
    // console.log(toyData);
    const {toyName, price, message, quantity,_id} = toyData
    const handleUpdate =(event)=>{
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const message = form.message.value;
        const updateToyInfo = {price, quantity, message};
        // console.log(updateToyInfo);
        fetch(`https://porto-server-rakib0157.vercel.app/toys/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updateToyInfo)
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your Toy information successfully updated.',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
        })
    }
    return (
        <div>
            <div className='bg-light text-center company-name py-5'>
                <h2 className='fw-bold'>Update Toy information</h2>
                <p className='fs-4 fw-semibold'>{toyName}</p>
            </div>
            <div className='container'>
                <form onSubmit={handleUpdate} className='mx-md-5 my-5 company-name py-5'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-2">
                                <label>Price:</label>
                                <input required type="number" defaultValue={price} name='price' className="form-control" />
                            </div>
                            <div className="">
                                <label>Available Quantity</label>
                                <input defaultValue={quantity} required type="number" name='quantity' className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <label>Detai Description About This Toy:</label>
                                <textarea defaultValue={message} required name='message' className="form-control" id="message" rows="4" ></textarea>

                            </div>
                        </div>
                    </div>
                        <button type="submit" className="btn btn-outline-success  mt-4 w-100">Update Information</button>

                </form>
            </div>
        </div>
    );
};

export default UpdatePage;