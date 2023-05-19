import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaGoogle } from 'react-icons/fa';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    useDynamicTitle('Login')
    const{loginUserWithGoogle, signInUser}= useContext(AuthContext)
    const [error, setError] = useState('')
    // email password login field code
    const handleLogin =(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            Swal.fire({
                icon: 'success',
                title: 'Your Account has created successfully.',
              })
        })
        .catch(error =>{
            if(error.message === 'Firebase: Error (auth/wrong-password).'){
                setError('Wrong password! Please Try Again With correct password')
              }
              else if((error.message === 'Firebase: Error (auth/user-not-found).')){
                setError('Your Account not found Please Register first.')
              }
        })
    }
    // console.log(error)
    // email password login field code

    //Google login auth code 
         const googleProvider = new GoogleAuthProvider()
         const auth = getAuth()
         const handleGoogleBtn = ()=>{
           loginUserWithGoogle(auth, googleProvider)
           .then(result =>{
             const newUser = result.user
             console.log(newUser)
           })
           .catch(error => {
             console.log(error)
           })
           
         }
    //Google login auth code
    return (
        <div className='container my-4'>
            <div className=' d-flex justify-content-center align-items-center'>
                <div className='bg-light p-5 my-5 rounded'>
                    <h4>Login to <span className='company-name fw-bold'>Porto Toys</span></h4>
                    <form onSubmit={handleLogin} className='pt-4'>
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
                    <p className='text-danger'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;