import React, { useContext } from 'react';
import {AuthContext} from '../../provider/AuthProvider'
import { Navigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const PrivateRout = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRout;