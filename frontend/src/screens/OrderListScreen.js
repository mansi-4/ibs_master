import React, { useState, useEffect } from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button ,Row,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listCustomerOrders} from '../actions/orderActions'
import {logout} from "../actions/userAction"
import jwt_decode from "jwt-decode";
 
function OrderListScreen() {
    let history=useNavigate();
    const dispatch = useDispatch()

    
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    
    const customerOrderList = useSelector(state => state.customerOrderList)
    const { loading:loadingCustomerList, error:errorCustomerList, customer_orders } = customerOrderList


    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            // to check if token is expired or not 
            var decodedHeader=jwt_decode(userInfo.token)
            if(decodedHeader.exp*1000 < Date.now()){
                dispatch(logout())
            }else{
                dispatch(listCustomerOrders())
            }
        }
        else{
            history('/login')
        }

    }, [dispatch, history, userInfo])

    
    const createOrderHandler = () => {
        // create product
        history("/admin/ordercreate")
    }
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>
            Go Back
            </Link>
            <Row className='align-items-center'> 
                <Col md={10}>
                    <h1>Orders</h1>
                </Col>

                <Col md={2}>
                    <Button className='my-3' onClick={createOrderHandler}>
                        <i className='fas fa-plus'></i> Create Order
                    </Button>
                </Col>
            </Row>
            
            {loadingCustomerList
                ? (<Loader />)
                : errorCustomerList
                    ? (<Message variant='danger'>{errorCustomerList}</Message>)
                    : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>CUSTOMER</th>
                                    <th>DATE</th>
                                    <th>Total</th>
                                    <th>PAID</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {customer_orders.length > 0 ?(
                            <tbody>
                                {customer_orders.map(customer_order => (
                                    <tr key={customer_order._id}>
                                        <td>{customer_order._id}</td>
                                        <td>{customer_order.customer && customer_order.customer.name}</td>
                                        <td>{customer_order.createdAt.substring(0, 10)}</td>
                                        <td>&#8377;{customer_order.totalPrice}</td>

                                        <td>{customer_order.isPaid ? (
                                            customer_order.paidAt.substring(0, 10)
                                        ) : (
                                                <i className='fas fa-times' style={{ color: 'red' }}></i>
                                            )}
                                        </td>

                                        

                                        <td>
                                            <LinkContainer to={`/admin/customer_order/${customer_order._id}`}>
                                                <Button variant='light' className='btn-sm'>
                                                    Details
                                                </Button>
                                            </LinkContainer>


                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            ):(
                                <Message variant='info'>
                                    Orders are empty
                                </Message>
                                )}
                        </Table>
                    )}
        </div>
    )
}

export default OrderListScreen 