import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';

import products from '../products'
import Rating from '../components/Rating';

function Product() {
    const {id} = useParams()
    const product = products.find((p) => p._id == id)
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Trang Chủ</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} đáng giá`} color={'#f8e825'} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Giá: ${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Mô tả: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    
                </Col>
            </Row>
        </div>
    )
}

export default Product