import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedAuth = ({children}) => {
    const auth = useSelector((state) => state.auth);
    let location = useLocation();

    if(auth.isAuth) {
        return <Navigate to="/home" state={{ from: location }} replace />
    }
    return children
};

export default ProtectedAuth;