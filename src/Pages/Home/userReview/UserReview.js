import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';



const UserReview = () => {
    const [reviewList, setReviewList] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviewList(data))
    }, [])
    return (
        <div className='bg-secondary my-5 '>
            <h2 className='text-center  p-3'> What client say</h2>
            <Container className='mt-5'>
                <div className='d-flex'>
                    {
                        reviewList.map(rv => <div className='mx-5'>
                            <Rating name="read-only" value={rv.star} readOnly />
                            <h6 className='my-3'>user: {rv?.userName}</h6>
                            <p>{rv.comment}</p>

                        </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default UserReview;