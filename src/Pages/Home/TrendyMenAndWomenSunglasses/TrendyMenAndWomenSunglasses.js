import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TrendyMenAndWomenSunglasses.css'

const TrendyMenAndWomenSunglasses = () => {
    return (
        <Container className='my-sm-1 my-md-4 my-lg-4'>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <Row className='for-men'>
                        <Col className='p-5' xs={12} sm={12} md={6} lg={6}>
                            <h6>Special Offer</h6>
                            <h4>Trendy Glasses for Men</h4>
                            <Link to="menSunglass">Shop Now</Link>

                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>

                        </Col>

                    </Row>

                </Col>
                <Col xs={12} sm={12} md={6} lg={6} className='my-sm-2'>
                    <Row className='for-women ms-3 '>
                        <Col className='p-5' xs={12} sm={12} md={6} lg={6}>
                            <h6>Special Offer</h6>
                            <h4>Trendy Glasses for Men</h4>
                            <Link to="womenSunglass">Shop Now</Link>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>

                        </Col>

                    </Row>

                </Col>


            </Row>
        </Container>
    );
};

export default TrendyMenAndWomenSunglasses;