import React from 'react'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <div>
        <header>
          <Navbar bg="light" variant='light' expand="lg" collapseOnSelect>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>ZENFLOWERS SHOP</Navbar.Brand>
              </LinkContainer>
              

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <LinkContainer to="/cart">
                    <Nav.Link ><i className='fas fa-shopping-cart'></i>Giỏ Hàng</Nav.Link>
                  </LinkContainer>
                  
                  <LinkContainer to="/login">
                    <Nav.Link ><i className='fas fa-user'></i>Đăng Nhập</Nav.Link>
                  </LinkContainer>
                  
                  
                  <NavDropdown title="Admin" id="basic-nav-dropdown">
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