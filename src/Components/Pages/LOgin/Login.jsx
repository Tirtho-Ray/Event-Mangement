import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        

        login(email, password)
            .then((result) => {
                console.log(result);
                e.target.reset();
                setSuccessMessage('Login successful!');
                setErrorMessage('');
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage('Invalid email or password. Please try again.');
                setSuccessMessage('');
            });
    };

    return (
        <div>
            <div>
                <div className="hero  bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" required className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                        <p><button className='mt-4 btn btn-'>Google</button></p>
                                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                        {successMessage && <p className="text-green-500">{successMessage}</p>}
                                        <p>
                                            Already have an account <Link to="/SignUp">
                                                <button className="btn btn-link">Register</button>
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
