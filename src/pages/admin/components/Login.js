import React, { useState } from 'react';
import { toast } from "react-toastify";
import '../style.css';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
const ADMIN_USERNAME = process.env.REACT_APP_ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;


const AdminLogin = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        localStorage.setItem('userName', userName);
        localStorage.setItem('password', password);
     navigate('/dashboard')
  
    // toast.success(' Admin Login  successfully.');
    } else {
        // toast.failed(' Invalid Password and User Name');
    }

    console.log('button')
  };

  // console.log('user Name', userName, password)
return (
<div>
<Navigation />
<section className="ftco-section ">
    <div className="container" >
        <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5"></div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
                <div className="wrap d-md-flex">
                    <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                        <div className="text w-100">
                            <h2>Admin Login</h2>
                            <p>Navigate to the HomePage?</p>
                            <a href="../index.html" className="btn btn-white btn-outline-white">Homepage</a>
                        </div>
                    </div>
                    <div className="login-wrap p-4 p-lg-5">
                        <div className="d-flex">
                            <div className="w-100">
                                <h3 className="mb-4">Sign In</h3>
                            </div>
                            <div className="w-100">
                                <p className="social-media d-flex justify-content-end">
                                    <a href="." className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
                                    <a href="." className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
                                </p>
                            </div>
                        </div>
                        <form  className="signin-form" >
                            <div className="form-group mb-3">
                                <label className="label" htmlFor="name">Username</label>
                                <input type="text" className="form-control" placeholder="Username" required  value={userName} onChange={(event) => setUserName(event.target.value)} />
                            </div>
                            <div className="form-group mb-3">
                                <label className="label" htmlFor="password">Password</label>
                                <input type="password" className="form-control" placeholder="Password" required value={password} onChange={(event) => setPassword(event.target.value)}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary submit px-3" onClick={handleSubmit}>Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>

);
}

export default AdminLogin;