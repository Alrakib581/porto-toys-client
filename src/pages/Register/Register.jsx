import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import { AuthContext } from '../../provider/AuthProvider';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const Register = () => {
    useDynamicTitle('Register')
    const {loginUserWithGoogle} = useContext(AuthContext)
       //google registration code 
       const googleProvider = new GoogleAuthProvider()
       const auth = getAuth()
       const handleGoogleBtn = ()=>{
           loginUserWithGoogle(auth, googleProvider)
           .then(result =>{
               const newUser = result.user
               console.log(newUser)
            })
            .then(error => {
                console.log(error);
                
            })     
        }
        //google registration code 
    return (
        <div  className='container my-4'>
            <div className=' d-flex justify-content-center align-items-center'>
                <div className='bg-light p-5 my-5 rounded'>
                    <h4>Register to <span className='company-name fw-bold'>Porto Toys</span></h4>
                    <form className='pt-4'>
                        <p>
                            <label className='d-block'>Enter your full name*</label>
                            <input  required className='p-2  rounded ' type="text" name="name" />
                        </p>
                        <p>
                            <label className='d-block'>Enter Email*</label>
                            <input  required className='p-2 rounded' type="email" name="email" />
                        </p>
                        <p>
                            <label className='d-block'>Enter Photo url*</label>
                            <input  required className='p-2  rounded' type="url" name="photo" />
                        </p>
                        <p>
                            <label className='d-block'>Enter Password*</label>
                            <input required className='p-2  rounded' type="password" name="password"  />    
                        </p>
                        <p className='py-3'>
                            <input  type="submit" value='Register' id="" className='w-100 btn btn-dark' />    
                        </p>
                    </form>
                    <p className='fw-semibold'>Register With <button onClick={handleGoogleBtn} className='btn btn-outline-dark'><FaGoogle/></button></p>
                    <p>All ready have an account? <Link to='/login'>Login</Link></p>
                    <p className='text-danger'>Errors</p>
                </div>
            </div>
        </div>
    );
};

export default Register;