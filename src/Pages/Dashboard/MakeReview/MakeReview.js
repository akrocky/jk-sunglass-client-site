import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const MakeReview = () => {
    const [isChanging, setIsChanging] = useState(false)
    const commentRef = useRef()
    const starRef = useRef()
    const { user } = useAuth()
    const [alert, setAlert] = useState('')

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        setIsChanging(true)

        data.userName = user.displayName;
        data.star = starRef.current.value;
        data.comment = commentRef.current.value;


        console.log(data);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAlert('make review sucessfully done')
                    setIsChanging(false)

                }
            })

        reset();
    };
    return (
        <div>
            <h2> Make a review</h2>
            <div class="alert alert-danger " role="alert">
                {alert}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="number" placeholder='0-5' {...register("star", { min: 0, max: 5 })} ref={starRef} />

                <br />
                <br />


                <input className="pe-5" placeholder='write review' type="text" {...register("comment")} ref={commentRef} />



                {errors.exampleRequired && <span>This field is required</span>}
                <br />

                <input className="btn btn-light px-3 mt-3" type="submit" value="submit review" />
            </form>
            {isChanging && <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}

        </div>
    );
};

export default MakeReview;