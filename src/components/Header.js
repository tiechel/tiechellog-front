import { Nav, Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <div className='header'>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Tiechelog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar-header">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;