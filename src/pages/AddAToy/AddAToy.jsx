import React, { useContext } from 'react';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import { AuthContext } from '../../provider/AuthProvider';
const AddAToy = () => {
    useDynamicTitle('Add A Toy')
    const {user} = useContext(AuthContext)
    // console.log(user)
    //add toy data collectin form function
    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const url = form.url.value;
        const toyName = form.toyName.value;
        const name = form.name.value;
        const email = form.email.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const message = form.message.value;
        const toyData = {name, email, toyName, url, subCategory, price, rating, quantity, message}
        console.log(toyData)

        
    };
    //add toy data collectin form function
    return (
        <div className=''>
           <div className='bg-light text-center company-name py-5'>
                <h2 className='fw-bold'>Add A Toy</h2>
                <p className='fw-semibold'>Do you want to add a toy? Then fill the form below and submit.</p>
           </div>
            <div className='container'>
                <form className='mx-md-5 my-5 company-name' onSubmit={handleAddToy}>
                    <div className="row gy-4">
                        <div className="col-md-4">
                            <div>
                                <label>Picture URL</label>
                                <input required type="url" name='url' className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Toy Name</label>
                                <input required type="text" name='toyName' className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Seller Name:</label>
                                <input readOnly defaultValue={user?.displayName} required type="text" name='name' className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Seller Email:</label>
                                <input readOnly type="email" name='email' className="form-control" defaultValue={user?.email} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Sub-category</label>
                                <input required type="text" name='subCategory' className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-4">
                                    <label>Price:</label>
                                    <input required type="text" name='price' className="form-control" />
                                </div>
                                <div className="col-md-4">
                                     <label>Rating:</label>
                                    <input required name='rating' type="number" min='1' max='5' className="form-control" />
                                </div>
                                <div className="col-md-4">
                                    <label>Quantity:</label>
                                    <input required name='quantity' type="number" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <label>Detai Description About This Toy:</label>
                        <textarea required name='message' className="form-control" id="message" rows="3" ></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-dark">Add This Toy</button>
                </form>
            </div>

        </div>
    );
};

export default AddAToy;