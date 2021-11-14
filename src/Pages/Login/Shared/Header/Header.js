import { Button, Container, Form, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth()
    return (
        <>
            <Navbar className='my-2'>
                <Container>

                    <Navbar.Toggle />
                    <Form className="d-flex me-5">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="light" className='me-5'>Search</Button>
                    </Form>
                    <Navbar.Collapse className="justify-content-center logo">
                        <NavLink to="/home"><Navbar.Brand className='ms-5 '>J K <br /> SUNGLASS</Navbar.Brand></NavLink>
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        {user.email ? <div>
                            <Navbar.Text>
                                Hlw!  {user.displayName}
                            </Navbar.Text>
                            <Button onClick={logout} variant='btn btn-secondary ms-3'>Log Out</Button>
                        </div> :
                            <NavLink to="/login">Login/Registration</NavLink>


                        }



                    </Navbar.Collapse>



                </Container>
                <br />


            </Navbar >
            <Navbar> <Container>
                <Navbar.Collapse className="justify-content-md-center justify-content-lg-center">
                    <NavLink className="link " to="/menSunglass">Men</NavLink>
                    <NavLink className="link mx-3" to="/womenSunglass">Women</NavLink>
                    <NavLink className="link mx-3" to="/newSunglass">New</NavLink>
                    <NavLink className="link mx-3" to="/brands">Brands</NavLink>
                    <NavLink className="link mx-3" to="/dashboard">Dashboard</NavLink>

                </Navbar.Collapse>
            </Container></Navbar>
        </>
    );
};

export default Header;