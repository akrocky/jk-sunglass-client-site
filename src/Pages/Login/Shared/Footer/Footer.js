import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className='mx-3 mt-5 text-center'>
            <Row>
                <Col className='d-flex justify-content-center' xs={6} sm={6} md={3} lg={3}>
                    <div>
                        <h5>ABOUT OUR COMPANY</h5>
                        <p>We are offering you the unique goods because our product is the real treasure. If you are a true fan, you’ll love it. We have a tremendous variety in comparison to all of our competitors. Our collection is like a sea pearl among simple stones.</p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <div>
                        <h6>Catagory</h6>
                        <Link>men</Link>
                        <br />
                        <Link>women</Link>
                        <br />
                        <Link>new</Link>
                        <br />
                        <Link>fasionable</Link>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <div>
                        <h6>Information</h6>
                        <br />
                        <Link>about us</Link>
                        <br />
                        <Link>contract with us</Link>
                        <br />
                        <Link>blog</Link>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <div>
                        <h6>My account </h6>
                        <br />
                        <Link>Login</Link>
                        <br />
                        <Link>My Cart</Link>
                        <br />
                        <Link>My Orders</Link>
                    </div>

                </Col>

            </Row>
            <p className='bg-secondary p-4'>© 2021 - Powered by AK</p>
        </footer>

    );
};

export default Footer;