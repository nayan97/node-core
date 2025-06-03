import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const  {user, loading} = use(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if(loading){
        return <span className="loading loading-ring loading-xl text-center text-9xl"></span>
    }
    
    if(!user){
       return <Navigate to="/login" state={location.pathname}></Navigate>
    }
        return children
};

export default PrivateRoute;