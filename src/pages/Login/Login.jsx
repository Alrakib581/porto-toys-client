import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaGoogle } from 'react-icons/fa';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    useDynamicTitle('Login')
    const{loginUserWithGoogle}= useContext(AuthContext)


    //Google login auth code 
         const googleProvider = new GoogleAuthProvider()
         const auth = getAuth()
         const handleGoogleBtn = ()=>{
           loginUserWithGoogle(auth, googleProvider)
           .then(result =>{
             const newUser = result.user
             console.log(newUser)
           })
           .then(error => {
             console.log(error)
           })
           
         }
    //Google login auth code
    return (
        <div className='container my-4'>
            <div className=' d-flex justify-content-center align-items-center'>
                <div className='bg-light p-5 my-5 rounded'>
                    <h4>Login to <span className='company-name fw-bold'>Porto Toys</span></h4>
                    <form className='pt-4'>
                        <p>
                            <label className='d-block'>Enter Email*</label>
                            <input required className='p-2 fs-5 rounded ' type="email" name="email" />
                        </p>
                        <p>
                            <label className='d-block'>Enter Password*</label>
                            <input required className='p-2 fs-5 rounded' type="password" name="password" />
                        </p>
                        <p className='py-3'>
                            <input type="submit" value='Login' id="" className='w-100 btn btn-dark p-2' />
                        </p>
                    </form>
                    <p className='fw-semibold'>Login With <button onClick={handleGoogleBtn} className='btn btn-outline-dark'><FaGoogle/></button></p>
                    <p>Don't have an account? <Link to='/register'>Register</Link></p>
                    <p className='text-danger'>Errors</p>
                </div>
            </div>
        </div>
    );
};

export default Login;