import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AppContext } from '../../context/Appcontext'

const ProtectedAuth = () => {

    const {user}=useContext(AppContext)
    if(user){
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }
    
}

export default ProtectedAuth