import React, { useContext } from 'react';
import {AuthContext} from '../../provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Swal from 'sweetalert2';

const PrivateRout = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children;
    }
    if(!user){
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'You have to log in first to view details',
            showConfirmButton: false,
            timer: 2500
          })
    }
    return <Navigate state={{from: location}} to= '/login' replace></Navigate>
};

export default PrivateRout;