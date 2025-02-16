import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result)
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