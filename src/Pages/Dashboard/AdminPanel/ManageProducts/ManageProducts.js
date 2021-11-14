import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const ManageProducts = () => {
    const [alert, setAlert] = useState('')
    const [isChanging, setIsChanging] = useState(true)

    const [products, setProducts] = useState([])

    useEffect(() => {


        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setIsChanging(false)


            });
    }, [isChanging])

    const handleDelete = (id) => {
        setIsChanging(true)
        fetch(`http://localhost:5000/deletedProduct/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    setAlert('oder removed sucessfully')
                    setIsChanging(false)
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
                        <th> Brand</th>

                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>

                    {products.map((pd, index) => <tr>
                        <td>{index + 1}</td>
                        <td>{pd?.name}</td>

                        <td> {pd?.brand}  </td>
                        <td><button onClick={() => handleDelete(pd._id)} className='btn btn-light'>delete this item from database </button></td>
                    </tr>)}




                </tbody>
            </Table>}
            {isChanging && <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
        </div>
    );
};

export default ManageProducts;