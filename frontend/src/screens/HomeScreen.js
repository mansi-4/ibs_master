import React, {useState,useEffect} from 'react'
import { Row,Col,Form,Card } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import products from '../products'
import Product from "../components/Product"
import { listProducts } from '../actions/productActions'
import Loader from "../components/Loader"
import Message from "../components/Message"
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import {useLocation,Link} from "react-router-dom"
import { listCategories } from '../actions/categoryActions'


function HomeScreen() {
  const location = useLocation()
  const dispatch=useDispatch()
  const productList = useSelector(state=>state.productList)
  const {error,loading,products,
    // page,
    // pages
  }= productList
  // let keyword=location.search
  const [category_id,setCategoryId]=useState("0")
  const [keyword,setKeyword]=useState("")
  useEffect(()=>{
    dispatch(listCategories())
   dispatch(listProducts(keyword,category_id))
  },[dispatch,keyword,category_id])
  const categoryList = useSelector(state => state.categoryList)
  const { loading:loadingCategories, error:errorCategories, categories } = categoryList
  return (
    <div>
      {/* {keyword==="" && category_id =="0" ? <ProductCarousel/> : ""} */}
      <h1>Dashboard</h1>
      
          <div> 
          <Row className='gy-4'>
            <Col sm={12} md={6} lg={4} xl={3} >
                  <Card className="h-100 my-3  rounded" id="card">
                      <Card.Body className="cardBody">
                          <Link to={`/admin/userlist`} style={{textDecoration:"none"}}>
                              <Card.Title as="div" className="cardtitle">
                                  <h5>Users</h5>
                              </Card.Title>    
                          </Link>
                          {/* <span className='count'>1</span> */}
                      </Card.Body>
                      
                  </Card>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3} >
                  <Card className="h-100 my-3 rounded" id="card">
                      <Card.Body className="cardBody">
                          <Link to={`/admin/colorlist`} style={{textDecoration:"none"}}>
                              <Card.Title as="div" className="cardtitle">
                                  <h5>Colors</h5>
                              </Card.Title>    
                          </Link>
                      </Card.Body>
                      
                  </Card>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3} >
                  <Card className="h-100 my-3 rounded" id="card">
                      <Card.Body className="cardBody">
                          <Link to={`/admin/sizelist`} style={{textDecoration:"none"}}>
                              <Card.Title as="div" className="cardtitle">
                                  <h5>Sizes</h5>
                              </Card.Title>    
                          </Link>
                      </Card.Body>
                      
                  </Card>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3} >
                  <Card className="h-100 my-3 rounded" id="card">
                      <Card.Body className="cardBody">
                          <Link to={`/admin/categorylist`} style={{textDecoration:"none"}}>
                              <Card.Title as="div" className="cardtitle">
                                  <h5>Category</h5>
                              </Card.Title>    
                          </Link>
                      </Card.Body>
                      
                  </Card>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3} >
                  <Card className="h-100 my-3 rounded" id="card">
                      <Card.Body className="cardBody">
                          <Link to={`/admin/productlist`} style={{textDecoration:"none"}}>
                              <Card.Title as="div" className="cardtitle">
                                  <h5>Products</h5>
                              </Card.Title>    
                          </Link>
                      </Card.Body>
                      
                  </Card>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3} >
                  <Card className="h-100 my-3 rounded" id="card">
                      <Card.Body className="cardBody" >
                          <Link to={`/admin/orderlist`} style={{textDecoration:"none"}}>
                              <Card.Title as="div" className="cardtitle">
                                  <h5>Orders</h5>
                              </Card.Title>    
                          </Link>
                      </Card.Body>
                      
                  </Card>
              </Col>
        </Row>
        </div>
      
    </div>
  )
}

export default HomeScreen
