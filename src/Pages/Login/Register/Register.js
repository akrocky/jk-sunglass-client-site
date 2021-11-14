

import React, { useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [data, setData] = useState({})

    const history = useHistory()

    const nameRef = useRef()
    const emailRef = useRef()
    const passwoardRef = useRef()
    const { register, handleSubmit, reset } = useForm();
    const { user, registerUser, signInWithGoogle, isLoading, authError } = useAuth();
    const onSubmit = data => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwoardRef.current.value;
        data.name = name;
        data.email = email;
        data.password = password;
        setData(data)
        registerUser(email, password, name, history);


        reset();
    }
    console.log(data);

    const inputStyle = {

        paddingLeft: '10%',
        paddingRight: '40%',
        paddingBottom: '10px'
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(history)
    }
    return (
        <Row style={{ height: '80vh', minHeight: '500px' }} className="mt-5">
            <Col xs={12} sm={12} md={6} lg={6}>
                <h4 className='text-center mb-5'>Sign Up</h4>

                {!isLoading && <form className='ms-5' onSubmit={handleSubmit(onSubmit)}>
                    <label className='ms-5 mb-2' htmlFor="name">name :</label>
                    <br />



                    <input className='ms-5 mb-3' style={inputStyle}   {...register("name")} ref={nameRef} type="text" placeholder="enter your name " />
                    <br />
                    <label className='ms-5 mb-2' htmlFor="email">email :</label>
                    <br />
                    <input className='ms-5 mb-3' style={inputStyle}   {...register("email")} ref={emailRef} type="email" placeholder="enter your email " />
                    <br />

                    <label className='ms-5 ' htmlFor="password">Password :</label>
                    <br />
                    <input style={inputStyle} className='my-3 ms-5 '  {...register("password")} ref={passwoardRef} type="password" placeholder="enter your password " />




                    <input style={{ padding: '5px 100px' }} className='btn btn-secondary ms-5' type="submit" value="Sign up" />
                </form>


                }
                {isLoading && <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}

                {authError && <div className="alert alert-info" role="alert">
                    <span>{authError}</span>
                </div>}
                {user?.email && <div className="alert alert-info" role="alert">
                    <span>User Created successfully!</span>
                </div>}
            </Col>
            <Col className=" p-5" xs={12} sm={12} md={6} lg={6}>
                <div className="d-flex justify-content-center ">
                    <div>
                        <h3 className="text-white">Welcome to login</h3>
                        <p>Already  have an account ?</p>
                        <Link to="/login"><button className="btn btn-secondary"> Login Here</button></Link>
                        <p className='my-2'>------------or------------</p>
                        <button onClick={() => handleGoogleSignIn(history)}>Sign with google account</button>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Register;