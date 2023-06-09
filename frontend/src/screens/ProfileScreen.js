import React,{useState,useEffect} from 'react'
import {Link,useSearchParams, useNavigate} from 'react-router-dom'
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Loader from "../components/Loader"
import Message from "../components/Message"
import {USER_UPDATE_PROFILE_RESET} from '../constants/userConstants'

import {getUserDetails,updateUserProfile} from '../actions/userAction'
import {logout} from "../actions/userAction"
import jwt_decode from "jwt-decode";

function ProfileScreen() {
    let history = useNavigate()
    const dispatch= useDispatch()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [message,setMessage] = useState("")

  
    // getting the state of userDetails from store for that we are using useSelector hook
    const userDetails=useSelector(state => state.userDetails)
    // destructuring the response what we get from reducer
    const {error,loading,user} = userDetails

    const userLogin=useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userUpdateProfile=useSelector(state => state.userUpdateProfile)
    const {success} = userUpdateProfile


    useEffect(()=>{
        if (userInfo) {
            // to check if token is expired or not 
            var decodedHeader=jwt_decode(userInfo.token)
            if(decodedHeader.exp*1000 < Date.now()){
                dispatch(logout())
            }
            else{
                if(!user || !user.name || success || userInfo._id !== user.user_id){
                    dispatch({type:USER_UPDATE_PROFILE_RESET})
                    dispatch(getUserDetails("profile"))
                }
                else{
                    setName(user.name)
                    setEmail(user.email)
                }
            }
        }
        else{
            history("/login")
        }
    },[dispatch,history,userInfo,user,success])

    // to submit data using useDispatch
    const submitHandler = (e) => {
        e.preventDefault()
        if(password!=confirmPassword){
            setMessage("Passwords do not match")
        }
        else{
            dispatch(updateUserProfile({
                "id":user.id,
                "name":name,
                "email":email,
                "password":password
            }))
            setMessage("")
        }
    }
    return (
        <Row>
            <Col md={4}>
                <h2>User Profile</h2>

                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='passwordConfirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Button type='submit' className="m-3" variant='primary'>
                        Update
                </Button>

                </Form>
            </Col>

            
        </Row>
  )
}

export default ProfileScreen
