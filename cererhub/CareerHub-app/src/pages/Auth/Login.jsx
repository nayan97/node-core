import Lottie from 'lottie-react';
import React, { use } from 'react';
import lottelog from "../../assets/lottelog.json";
import { AuthContext } from '../../contexts/AuthContext';
import Social from './Social';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {
    const {loginUser} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/'
    console.log(location);
    
        const handleLogin = e =>{
            e.preventDefault();
            const form = e.target;

            const email = form.email.value;
            const password = form.password.value;
            navigate(from);
            // console.log(email, password)

            loginUser(email, password)
             .then(result =>{
                    console.log(result.user);
                    
                })
                .catch(error =>{
                    console.log(error)
                })


     

        }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                
                   <Lottie style={{width: '510px'}} animationData={lottelog} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Login Here!</h1>
                        <form onSubmit={handleLogin}>
                              <fieldset className="fieldset">
                              
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input w-full" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <Social from={from}></Social>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;