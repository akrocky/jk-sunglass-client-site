import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const ManageAllOrders = () => {

    const [alert, setAlert] = useState('')
    const [isChanging, setIsChanging] = useState(true)

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
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
    const handleUpdated = (id, status) => {
        setIsChanging(true)
        fetch(`http://localhost:5000/updateOrder?search=${id}&status=${status}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    setAlert(`status changed to ${status}`)
                }

            })
    }
    return (
        <div>
            <div class="alert alert-danger " role="alert">
                {alert}
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SL.</th>
                        <th>Products Name</th>
                        <th>Delivery to </th>
                        <th>Mobile: No: </th>

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
                        <td><button onClick={() => handleDelete(order._id)} className='btn btn-danger'>cancel </button> <br />
                            <button onClick={() => handleUpdated(order._id, 'confirm')} className='btn btn-danger my-2'>confirm </button>
                            <br />
                            <button onClick={() => handleUpdated(order._id, 'delivered')} className='btn btn-danger'>delivered </button>


                        </td>
                    </tr>)}



                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrders;