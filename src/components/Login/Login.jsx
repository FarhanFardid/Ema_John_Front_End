import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../Providers/AuthProvider';



const Login = () => {

    const {signUser} = useContext(AuthContext);
    // console.log(signUser);
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       
        console.log(email,password); 

        signUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
        })
        .catch(error => {
            console.log(error);
        })
        
    }
    return (
        <div className='shadow'>
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter Email' required />

                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Enter Password' required />

                </div>
                <input className='btn-submit' type="submit" value="Login" />

                <p className='info-text'>New to Ema-John? <Link className='link-text' to='/signup'>Create New Account</Link></p>
 <div><button className='btn-google'><p> Continue with Google</p> <ArrowRightOnRectangleIcon className="icon" /></button></div>
                

            </form>
        </div>
        </div>
    );
};

export default Login;