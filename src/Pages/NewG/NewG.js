import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';


const NewG = () => {
    const [allProducts, setAllProducts] = useState()
    const { isLoading, handleBuyingProducts } = useAuth()
    const history = useHistory()

    useEffect(() => {
        fetch('https://shrouded-ocean-12161.herokuapp.com/products/new')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    return (
        <div>

            <Container>
                <h2 className='text-center'>New Sunglasses Collections </h2>
                <Row className='my-5 mx-auto justify-content-center'>
                    {allProducts?.map((mp, index) => <Col sx={6} sm={6} md={4} lg={4} className='my-4'  >


                        <div className="card text-center px-4 py-1 border-0" style={{ width: '18rem' }}>
                            <img src={mp?.img} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 className="card-title">{mp?.name}</h5>
                                <small>{mp?.brand}</small>
                                <p className="card-text">For: {mp.gender}</p>
                                <p className="card-text">For: {mp.price} $</p>
                                <Button onClick={() => handleBuyingProducts(history, allProducts[index])} variant='outline-dark'> buy now</Button>
                            </div>
                        </div>

                    </Col>
                    )}
                    {isLoading && <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>}
                </Row>

            </Container>
        </div>
    );
};

export default NewG;