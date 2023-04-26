import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    // console.log(createUser);
    const [error,setError] = useState('');
 
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm  = form.confirm.value;
        console.log(email,password,confirm); 
        if(password !== confirm){
            setError("Password did not match");
            alert("Password did not match")
            return

        }

        else if(password.length < 6){
            setError("Password must be 6 characters or longer");
            alert("Password must be 6 characters or longer");
            return
        }

        createUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
        })
        .catch (error => {
            console.log(error);
        })

    }

    return (
        <div className='shadow-sign'>
        <div className='form-container-sign'>
            <h2 className='form-title-sign'>Sign UP</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-controls'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter Email' required />

                </div>
                <div className='form-controls'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Enter Password' required />

                </div>
                <div className='form-controls'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='Re-Enter Password' required />

                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />

                <p className='info-text'>Already Have an Account? <Link className='link-text' to='/login'>Login</Link></p>
 <div><button className='btn-google'><p> Continue with Google</p> <ArrowRightOnRectangleIcon className="icon" /></button></div>
                

            </form>
            <p className='text-error'>{error}</p>
        </div>
        </div>
    );
};


export default SignUp;