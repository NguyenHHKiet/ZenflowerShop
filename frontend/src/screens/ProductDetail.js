import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';

import Rating from '../components/Rating';
import axios from 'axios';

function ProductDetail() {
    const {id} = useParams()
    const [product, setProduct] =useState([])

    useEffect(()=>{

        async function fetchProducts(){
        const {data} = await axios.get(`/api/products/${id}`)
        setProduct(data)
        }
        fetchProducts()

    },[])
    
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Trang Chủ</Link>
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>

                <Col md={4}>
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
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Giá:</Col>
                                    <Col>
                                        ${product.price}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Trong kho:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'Còn Hàng' : 'Hết Hàng'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <div className='d-grid gap-2'>
                                    <Button variant="primary" type='button' 
                                        disabled={product.countInStock === 0}
                                    >
                                        Thêm vào Giỏ
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetail