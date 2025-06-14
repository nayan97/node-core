import React, {use} from 'react';
import { Link, NavLink } from 'react-router';

import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {

    const {user, logoutUser} = use(AuthContext);

    const handleLogout = () =>{
        logoutUser()
            .then(() =>{
                console.log('logout successfully');
                
            })
            .catch(error => {
                console.log(error)
            })
    }

    const links = 
        <> 
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><a>Item 3</a></li>
        </>
   


    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                    </div>
                        <Link to="/">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                        {
                            user ? <button onClick={handleLogout} className='btn'>Logout</button> : <>
                            <NavLink to="/login" className="btn">Login</NavLink>
                            <NavLink to="/register" className="btn btn-accent  text-white">Register</NavLink></>

                        }
                    
                </div>
                </div>
        </div>
    );
};

export default Header;