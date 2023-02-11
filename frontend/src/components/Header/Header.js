import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl'

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Note Zipper</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                        </Form>

                    </Nav>
                    <Nav>

                        <>
                            <Nav.Link href="#home">My Notes</Nav.Link>
                            <NavDropdown
                                title="Shrived Kakde"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#home1">
                                    My Profile
                                </NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item >
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;