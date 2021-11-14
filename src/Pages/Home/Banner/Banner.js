import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner my-5'>
            <Row>
                <Col xs={6} sm={6} md={6} lg={6}></Col>
                <Col xs={6} sm={6} md={6} lg={6} className='d-flex justify-content-center align-items-center'>
                    <div className='ms-sm-3 p-sm-2 my-sm-1 my-md-5 my-lg-5 p-md-5 p-lg-5' >
                        <h3 className='banner-heading ' >Welcome to <br /> Jk Sunglass</h3>
                        <p className='my-md-4 my-lg-4'>Check out our spring/summer collection 2021 </p>
                        <Link to='/brands'><button> Prurchase Now</button></Link>

                    </div>

                </Col>

            </Row>
        </div>
    );
};

export default Banner;