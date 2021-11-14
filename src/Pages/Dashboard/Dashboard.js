import React from 'react';
import { Button, Col, Row, Tab } from 'react-bootstrap';
import {

    Switch,
    Route,
    Link,
    // useParams,
    useRouteMatch
} from "react-router-dom";
import Payment from './Payment/Payment';

import MyOrders from './MyOrders/MyOrders';
import MakeAnAdmin from './AdminPanel/MakeAnAdmin/MakeAnAdmin';
import ManageAllOrders from './AdminPanel/ManageAllOrders/ManageAllOrders';
import AddProduct from './AdminPanel/AddProduct/AddProduct';
import ManageProducts from './AdminPanel/ManageProducts/ManageProducts';
import MakeReview from './MakeReview/MakeReview';
import PrivateRoute from '../Login/PrivateRoute/PrivateRoute';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, admin } = useAuth();
    return (
        <Tab.Container >
            <h4 style={{ fontSize: 40, color: 'grey' }} className='text-center bold  my-5'>Dashboard</h4>
            <Row>
                <Col sm={4}>
                    <ul className="list-group text-center">
                        <li className="list-group-item"><Link to={`${url}`}><Button variant="light">My Orders</Button></Link></li>
                        <li className="list-group-item"><Link to={`${url}/payment`}><Button variant="light">Payment</Button></Link></li>
                        <li className="list-group-item"><Link to={`${url}/makeReview`}><Button variant="light">Make a Review</Button></Link></li>
                        {admin && <li className="list-group-item"><Link to={`${url}/makeAnAdmin`}><Button variant="light">Make an Admin</Button></Link></li>}
                        {admin && <li className="list-group-item"><Link to={`${url}/manageAllOrders`}><Button variant="light">Manage All Orders</Button></Link></li>}
                        {admin && <li className="list-group-item"><Link to={`${url}/addProduct`}><Button variant="light">Add A Product</Button></Link></li>}
                        {admin && <li className="list-group-item"><Link to={`${url}/manageProducts`}><Button variant="light">Manage Products</Button></Link></li>}








                    </ul>

                </Col>
                <Col sm={8}>



                    <Switch>
                        <PrivateRoute exact path={path}>
                            <MyOrders></MyOrders>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/payment`}>
                            <Payment></Payment>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/makeReview`}>
                            <MakeReview></MakeReview>
                        </PrivateRoute>
                        <AdminRoute path={`${path}/makeAnAdmin`}>
                            <MakeAnAdmin></MakeAnAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>

                    </Switch>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default Dashboard;