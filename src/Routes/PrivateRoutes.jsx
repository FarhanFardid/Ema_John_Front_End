import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <p >Loading....please wait</p>
    }

    if(user){
        return children;
    }
    else{
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    
};

export default PrivateRoutes;