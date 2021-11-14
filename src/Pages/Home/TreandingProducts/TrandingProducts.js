import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import TandingSingleProduct from './TandingSingleProduct';

const TrandingProducts = () => {
    const [trandingProduts, setTrandingProduts] = useState([])
    const history = useHistory()
    useEffect(() => {
        fetch('https://shrouded-ocean-12161.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setTrandingProduts(data))
    }, [])
    const filterTrandingProsucts = trandingProduts?.filter(tp => tp.catagory === 'new').slice(0, 6)
    return (
        <div>
            <h2 className='text-center'>Tranding products</h2>
            <Container>
                <Row>
                    {
                        filterTrandingProsucts.map((ftp, index) => <TandingSingleProduct key={index} ftp={ftp} trandingProduts={trandingProduts} history={history} index={index}></TandingSingleProduct>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default TrandingProducts;