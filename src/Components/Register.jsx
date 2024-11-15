import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../Providers/AuthProvider';



const Login = () => {

    const navigate = useNavigate();
    const {createUser, signInWithGoogle} = useContext(AuthContext);

    



    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;

        console.log(email, password, name);

        // create user

        createUser(email, password)
        .then(result => {
            console.log(result)
            e.target.reset()
            navigate('/register')
        })
        .catch(error => console.log(error.message))


    }


    const handleGoogleSignIn = () => {

        signInWithGoogle()
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(error => console.log(error.message))
        navigate('/register')

    }




    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold underline">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <form onSubmit={handleRegister} className="card-body">

                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="enter your name" name='name' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        
                    </form>
                    <p className='mb-2 flex justify-start'><button onClick={handleGoogleSignIn} className='btn'>Google</button></p>
                    <p className='text-base-500 text-[14px]' >Already have an account <Link to='/login' className='underline hover:text-blue-600 font-bold'>Login</Link> </p>
                    
                </div>
               
            </div>
        </div>
    );
};

export default Login;