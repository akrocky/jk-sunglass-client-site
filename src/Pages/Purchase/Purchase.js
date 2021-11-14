import React, { useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Purchase = () => {
    const { user, buyingProduct } = useAuth()
    const [isChanging, setIsChanging] = useState(false)
    const history = useHistory()
    const nameRef = useRef()
    const emailRef = useRef()
    const mobileRef = useRef()
    const adressRef = useRef()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        data.customerName = nameRef.current.value;
        data.email = emailRef.current.value;
        data.mobileNumber = mobileRef.current.value;
        data.adress = adressRef.current.value;
        data.productName = buyingProduct.name;
        data.status = 'pending';
        setIsChanging(true)

        //save the order to database
        if (data.email) {
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsChanging(false)
                })
        }


        history.push('/dashboard')

        reset();
    }
    const inputStyle = {

        paddingLeft: '10%',
        paddingRight: '40%',
        paddingBottom: '10px'
    }
    return (
        <div className='my-5 ms-5'>
            <h2 className='text-center'>Fill the the form for delivery</h2>
            {!isChanging && <form className='ms-5' onSubmit={handleSubmit(onSubmit)}>

                <label className='ms-5 mb-2' >name : </label>
                <br />
                <input className='ms-5 mb-3' style={inputStyle}   {...register("customerName")} ref={nameRef} type="text" placeholder="name (who will get the product) " />
                <br />
                <label className='ms-5 mb-2' >email :</label>
                <br />
                <input className='ms-5 mb-3' disabled style={inputStyle}   {...register("email")} defaultValue={user?.email} type="email" placeholder="enter your email " ref={emailRef} />
                <br />

                <label className='ms-5 '>Mobile No.</label>
                <br />
                <input style={inputStyle} className='my-3 ms-5 '  {...register("mobileNumber")} type="number" placeholder="enter your mobile number " ref={mobileRef} />
                <br />

                <label className='ms-5 ' > Adresss:</label>
                <br />
                <input style={inputStyle} className='my-3 ms-5 pb-5 '  {...register("adress")} type="text" placeholder="enter delevery adress" ref={adressRef} />

                <br />


                <input style={{ padding: '5px 100px' }} className='btn btn-secondary ms-5' type="submit" value="Confirm" />
            </form>


            }
            {isChanging && <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}

        </div>
    );
};

export default Purchase;