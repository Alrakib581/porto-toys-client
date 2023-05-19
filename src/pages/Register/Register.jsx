import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import { AuthContext } from '../../provider/AuthProvider';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {
    useDynamicTitle('Register')
    const [error, setError] = useState('')
    const {loginUserWithGoogle, creatingUser, userInfoUpdate} = useContext(AuthContext)
    const navigate = useNavigate();
    // registration field code 
    const handleRegister = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(name, email, photo, password)
        creatingUser(email,password)
        .then(result =>{
            const createdNewUser = result.user;
            userNamePhoto(createdNewUser,name,photo)
            Swal.fire({
                icon: 'success',
                title: 'Your Account has created successfully.',
              })
            event.target.reset()
            navigate('/');
        })
        .catch(error =>{
            console.log(error)
            if(error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
                setError('Your Password should be at least 6 characters.')
              }
              else if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
                setError('User Already Exist! Please login or create account with new Email')
              }
        })
    }
    // registration field code 

    //user info update code 

    const userNamePhoto = (user,name,photo)=>{
        userInfoUpdate(user,{
          displayName: name, photoURL: photo
        })
        .then(()=>{
        //   console.log('updated')
        })
        .catch(error=>{
          setError(error)
        })
      }
    //user info update code 
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
                    <form onSubmit={handleRegister} className='pt-4'>
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
                            <input  type="submit" value='Register'  className='w-100 btn btn-dark' />    
                        </p>
                    </form>
                    <p className='fw-semibold'>Register With <button onClick={handleGoogleBtn} className='btn btn-outline-dark'><FaGoogle/></button></p>
                    <p>All ready have an account? <Link to='/login'>Login</Link></p>
                    <p className='text-danger'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;