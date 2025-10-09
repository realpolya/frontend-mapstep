/* --------------------------------Imports--------------------------------*/

import { Navigate } from 'react-router-dom';

// import { AppContext } from '../App.jsx';

import useAuth from '../providers/Auth/useAuth.jsx';

/* --------------------------------Component--------------------------------*/

const ProtectedRoute = ({ children }) => {

    const { user } = useAuth()
    const isAuthenticated = !!user // FIXME: might cause issues with await / async

    return isAuthenticated ? children : <Navigate to="/" replace />

}

/* --------------------------------Export--------------------------------*/

export default ProtectedRoute