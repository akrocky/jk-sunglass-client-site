
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const MakeAnAdmin = () => {
    const emailRef = useRef()
    const [alert, setAlert] = useState('')

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const email = emailRef.current.value;
        data.email = email;
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAlert('make admin sucessfully done')


                }
            })

        reset();
    };
    return (
        <div>
            <h2>make an admin</h2>
            <div class="alert alert-danger " role="alert">
                {alert}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className="pe-4" type="email" {...register("email")} ref={emailRef} />



                {errors.exampleRequired && <span>This field is required</span>}
                <br />

                <input className="btn btn-light px-3 mt-3" type="submit" />
            </form>

        </div>
    );
};

export default MakeAnAdmin;