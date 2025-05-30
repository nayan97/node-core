import React, { Children } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = () => {
    const authInfo = {

    }
    return (
        <div>
            <AuthContext value={authInfo}>
                {Children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;