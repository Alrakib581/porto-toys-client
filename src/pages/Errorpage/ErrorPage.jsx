import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=''>
              <div className='text-center'>
                <img className='img-fluid' src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_640.png" alt="" />
            <div>
                <Link className='text-danger fs-2' to='/'>Go To Home page</Link>
            </div>

            </div>
        </div>
    );
};

export default ErrorPage;