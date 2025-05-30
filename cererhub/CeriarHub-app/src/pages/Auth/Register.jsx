import Lottie from 'lottie-react';
import React from 'react';
import groovyWalkAnimation from "../../assets/lottereg.json";

const Register = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                
                   <Lottie style={{width: '220px'}} animationData={groovyWalkAnimation} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Register Here!</h1>
                        <form>
                              <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name="name" className="input" placeholder="Name" />
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;