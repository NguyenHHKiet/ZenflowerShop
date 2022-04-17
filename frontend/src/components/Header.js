import React from 'react'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

function Header() {
  return (
    <div>
        <header>
          <Navbar bg="light" variant='light' expand="lg" collapseOnSelect>
            <Container>
              <Navbar.Brand href="/">ZENFLOWERS SHOP</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Giỏ Hàng</Nav.Link>
                  <Nav.Link href="/login"><i className='fas fa-user'></i>Đăng Nhập</Nav.Link>
                  
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    </div>
  )
}

export default Header