import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';



const AddProduct = () => {

    const [isChanging, setIsChanging] = useState(false)
    const [alert, setAlert] = useState('')

    const nameRef = useRef()
    const brandRef = useRef()
    const colorRef = useRef()
    const imgRef = useRef()
    const sizeRef = useRef()
    const priceRef = useRef()
    const catagoryRef = useRef()
    const genderRef = useRef()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        data.name = nameRef.current.value;
        data.brand = brandRef.current.value;
        data.color = colorRef.current.value;
        data.img = imgRef.current.value;
        data.size = sizeRef.current.value;
        data.price = priceRef.current.value;
        data.catagory = catagoryRef.current.value;
        data.gender = genderRef.current.value;

        setIsChanging(true)


        // //save the order to database
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAlert('your product data is sucessfully added on database')
                setIsChanging(false)
            })
        console.log(data);



        reset();
    }
    const inputStyle = {

        paddingLeft: '10%',
        paddingRight: '40%',
        paddingBottom: '10px'
    }
    return (
        <div className='my-5 ms-5'>
            <h2 className='text-center'>Add A Product on Database</h2>

            <div class="alert alert-danger " role="alert">
                {alert}
            </div>
            {!isChanging && <form className='ms-5' onSubmit={handleSubmit(onSubmit)}>

                <label className='ms-5 mb-2' htmlFor="reciverName">Product Name : </label>
                <br />
                <input className='ms-5 mb-3' style={inputStyle}   {...register("name")} ref={nameRef} type="text" placeholder="product name " />
                <br />
                <label className='ms-5 mb-2' htmlFor="brande">Brand : </label>
                <br />
                <input className='ms-5 mb-3' style={inputStyle}   {...register("brand")} ref={brandRef} type="text" placeholder="which brand " />
                <br />
                <label className='ms-5 mb-2' htmlFor="color">Color : </label>
                <br />
                <input className='ms-5 mb-3' style={inputStyle}   {...register("color")} ref={colorRef} type="text" placeholder="which color " />
                <br />
                <label className='ms-5 mb-2' htmlFor="img">Image Link : </label>
                <br />
                <input className='ms-5 mb-3' style={inputStyle}   {...register("img")} ref={imgRef} type="text" placeholder="https://....... " />
                <br />
                <label className='ms-5 mb-2' htmlFor="size">size : </label>
                <br />
                <input className='ms-5 mb-3' style={inputStyle}   {...register("size")} ref={sizeRef} type="text" placeholder="size " />
                <br />
                <label className='ms-5 mb-2' htmlFor="price">price: </label>
                <br />
                <input className='ms-5 mb-3' style={inputStyle}   {...register("price")} ref={priceRef} type="text" placeholder="price" />
                <br />
                <label className='ms-5 mb-2' htmlFor="reciverName">catagory : </label>
                <br />
                <input className='ms-5 mb-3' style={inputStyle}   {...register("catagory")} ref={catagoryRef} type="text" placeholder="new/stylish/fashionable..." />
                <br />
                <label className='ms-5 mb-2' htmlFor="gender">gender : </label>
                <br />
                <input className='ms-5 mb-3' style={inputStyle}   {...register("gender")} ref={genderRef} type="text" placeholder="men/women" />
                <br />






                <input style={{ padding: '5px 100px' }} className='btn btn-secondary ms-5' type="submit" value="Create on dtabase" />
            </form>


            }
            {isChanging && <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}

        </div>
    );
};

export default AddProduct;