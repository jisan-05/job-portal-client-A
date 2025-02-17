import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const location = useLocation()
    const from = location.state || '/' ;
    const navigate = useNavigate()
    

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result)
            navigate(from)
        })
        .catch(error => {
            console.log(error)
        })
        
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn w-full mx-auto bg-orange-700 text-white'>Google Sign In</button>
        </div>
    );
};

export default SocialLogin;