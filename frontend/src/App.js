import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './screens/Home';
import Product from './screens/Product';

function App() {
  return (
    <Router>
      <Header/>
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<Home/>} index />
              <Route path='/product/:id' element={<Product/>} />
            </Routes>
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
