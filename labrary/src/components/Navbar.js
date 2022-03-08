import { Container, Nav, Navbar } from "react-bootstrap";

function NavbarItem() {
    return (  
        <>

<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">LABRARY</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Books">Books</Nav.Link>
      <Nav.Link href="/Authers">Authers</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </>


    );
}

export default NavbarItem