import React, { useContext } from 'react';
import AuthContext from './context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading/Loading';

const PrivetRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if(loading){
        return <Loading></Loading>;
    }

    if(user){
        return children;
    }

    return <Navigate to='/signIn' state={location?.pathname}></Navigate>;
};

export default PrivetRouter;