import React from 'react';
import { Button, Col } from 'react-bootstrap';

import useAuth from '../../../hooks/useAuth';

const TandingSingleProduct = (props) => {
    const { handleBuyingProducts } = useAuth()


    return (
        <Col sx={6} sm={6} md={4} lg={4} className='my-4 '  >


            <div className="card text-center px-4 py-1 border-0" style={{ width: '18rem' }}>
                <img src={props?.ftp.img} className="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 className="card-title">{props?.ftp.name}</h5>
                    <small>{props?.ftp.brand}</small>
                    <p className="card-text">For: {props?.ftp.gender}</p>
                    <p className="card-text">For: {props?.ftp.price} $</p>
                    <Button onClick={() => handleBuyingProducts(props?.history, props?.trandingProduts[props?.index])} variant='outline-dark'> buy now</Button>
                </div>
            </div>

        </Col>
    );
};

export default TandingSingleProduct;