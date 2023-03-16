import React, {useState,useEffect} from 'react'
import { Row,Col,Form,Card } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import {useLocation,Link,useNavigate} from "react-router-dom"
import {listTableCounts, logout} from '../actions/userAction'
import jwt_decode from "jwt-decode";


function HomeScreen() {
  const location = useLocation()
  let history=useNavigate()
  const dispatch=useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const tableCount = useSelector(state => state.tableCount)
  const { loading,error,count } = tableCount
  useEffect(()=>{
    if (userInfo && userInfo.isAdmin) {
        // to check if token is expired or not 
        var decodedHeader=jwt_decode(userInfo.token)
        if(decodedHeader.exp*1000 < Date.now()){
            dispatch(logout())
        }
        else{
            dispatch(listTableCounts())
        }
    }
    else{
        
        history('/login')
    }
    },[dispatch,userInfo])
    
  return (
    <div>
      <h1>Dashboard</h1>
      
          <div> 
          <Row className='gy-4'>
            <Col sm={12} md={6} lg={4} xl={3} >
                <Card className="rounded border border-left border-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <Link to={`/admin/userlist`} style={{textDecoration:"none"}}>
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        <h5>Users</h5>
                                    </div>    
                                </Link>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">
                                    {loading ? (""):(
                                        count.usercount
                                    )}
                                </div>
                            </div>
                            <div class="col-auto text-dark">
                                <i class="fas fa-users fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3} >
              <Card className="rounded border border-left border-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <Link to={`/admin/colorlist`} style={{textDecoration:"none"}}>
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        <h5>Colors</h5>
                                    </div>    
                                </Link>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">
                                    {loading ? (""):(
                                        count.colorcount
                                    )}
                                </div>
                            </div>
                            <div class="col-auto text-danger" >
                                <i class="fas fa-paint-brush fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3} >
              <Card className="rounded border border-left border-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <Link to={`/admin/sizelist`} style={{textDecoration:"none"}}>
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        <h5>Sizes</h5>
                                    </div>    
                                </Link>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">
                                    {loading ? (""):(
                                        count.sizecount
                                    )}
                                </div>
                            </div>
                            <div class="col-auto text-warning"  >
                                <i class="fas fa-arrows-v fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3} >
              <Card className="rounded border border-left border-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <Link to={`/admin/categorylist`} style={{textDecoration:"none"}}>
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        <h5>Categories</h5>
                                    </div>    
                                </Link>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">
                                    {loading ? (""):(
                                        count.categorycount
                                    )}
                                </div>
                            </div>
                            <div class="col-auto text-success" >
                                <i class="fas fa-sitemap fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3} >
              <Card className="rounded border border-left border-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <Link to={`/admin/productlist`} style={{textDecoration:"none"}}>
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        <h5>Products</h5>
                                    </div>    
                                </Link>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">
                                    {loading ? (""):(
                                        count.productcount
                                    )}
                                </div>
                            </div>
                            <div class="col-auto text-info">
                                <i class="fas fa-archive fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3} >
              <Card className="rounded border border-left border-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <Link to={`/admin/orderlist`} style={{textDecoration:"none"}}>
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        <h5>Orders</h5>
                                    </div>    
                                </Link>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">
                                    {loading ? (""):(
                                        count.ordercount
                                    )}
                                </div>
                            </div>
                            <div class="col-auto text-grey" >
                                <i class="fas fa-receipt fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </Card>
              </Col>
        </Row>
        </div>
      
    </div>
  )
}

export default HomeScreen
