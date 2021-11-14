import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [alert, setAlert] = useState('')
    const [isChanging, setIsChanging] = useState(true)
    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {


        fetch(`http://localhost:5000/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setIsChanging(false)


            });
    }, [isChanging])

    const handleDelete = (id) => {
        setIsChanging(true)
        fetch(`http://localhost:5000/deletedOrder/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    setAlert('oder removed sucessfully')
                }

            })



    }



    return (
        <div>
            <div class="alert alert-danger " role="alert">
                {alert}
            </div>
            {!isChanging && <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SL.</th>
                        <th>Products Name</th>
                        <th>Delivery to </th>
                        <th>Mobile: No.: </th>

                        <th>status</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>

                    {orders.map((order, index) => <tr>
                        <td>{index + 1}</td>
                        <td>{order?.productName}</td>
                        <td>{order?.customerName} <br /> {order?.adress} </td>
                        <td>{order?.mobileNumber}  </td>
                        <td>{order?.status}  </td>
                        <td><button onClick={() => handleDelete(order._id)} className='btn btn-light'>cancel </button></td>
                    </tr>)}




                </tbody>
            </Table>}
            {isChanging && <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
        </div>
    );
};

export default MyOrders;