

import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useLocation, useHistory } from 'react-router-dom';

import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


const Login = () => {

    const history = useHistory()
    const location = useLocation()
    const emailRef = useRef()
    const passwoardRef = useRef()
    const { register, handleSubmit, reset } = useForm();
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth()
    const onSubmit = data => {
        const email = emailRef.current.value;
        const password = passwoardRef.current.value;
        data.email = email;
        data.password = password;
        console.log(data)
        loginUser(email, password, location, history);
        reset();
    }
    const inputStyle = {

        paddingLeft: '10%',
        paddingRight: '40%',
        paddingBottom: '10px'
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Row style={{ height: '80vh', minHeight: '500px' }} className="mt-5">
            <Col xs={12} sm={12} md={6} lg={6}>
                <h4 className='text-center mb-5'>Sign In</h4>

                {!isLoading && <form className='ms-5' onSubmit={handleSubmit(onSubmit)}>
                    <label className='ms-5 mb-2' htmlFor="email">Email :</label>
                    <br />
                    <form action=""></form>


                    <input className='ms-5 mb-3' style={inputStyle}   {...register("email")} ref={emailRef} type="email" placeholder="enter your email " />
                    <br />

                    <label className='ms-5 ' htmlFor="password">Password :</label>
                    <br />
                    <input style={inputStyle} className='my-3 ms-5 '  {...register("password")} ref={passwoardRef} type="password" placeholder="enter your password " />




                    <input style={{ padding: '5px 100px' }} className='btn btn-secondary ms-5' type="submit" value="LOGIN" />
                </form>

                }
                {isLoading && <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}

                {authError && <div className="alert alert-info" role="alert">
                    <span>{authError}</span>
                </div>}
                {user?.email && <div className="alert alert-info" role="alert">
                    <span>User login successfully!</span>
                </div>}
            </Col>
            <Col className=" p-5" xs={12} sm={12} md={6} lg={6}>
                <div className="d-flex justify-content-center ">
                    <div>
                        <h3 className="text-white">Welcome to login</h3>
                        <p>Didn't have an account ?</p>
                        <Link to="/register"><button className="btn btn-secondary"> Sign Up Here</button></Link>
                        <p className='my-2'>------------or------------</p>
                        <button onClick={() => handleGoogleSignIn(location, history)}>Sign with google account</button>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Login;