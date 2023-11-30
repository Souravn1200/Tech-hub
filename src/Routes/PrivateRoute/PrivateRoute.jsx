import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const PrivateRoute = ({children}) => {
    // const location = useLocation()

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div><span className="loading loading-bars loading-lg mx-auto"></span></div>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" ></Navigate>
};


export default PrivateRoute;