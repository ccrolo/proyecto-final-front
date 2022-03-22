import {Navigate, useLocation} from 'react-router-dom';
import { React } from 'react';



function PrivateLogin({children}) {
    const location = useLocation();
    console.log(location)
    const token=localStorage.getItem('token')

    if (token === null) {
        return <Navigate to={'/'} replace></Navigate>
        
    }
    return children

    
    
}


export default PrivateLogin

