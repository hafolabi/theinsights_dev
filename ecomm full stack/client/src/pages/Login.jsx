import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/apiCalls'

const Container = styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(rgba(255,255,255, 0.5), rgba(255,255,255, 0.5)), url('Images/bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    border:1px solid teal;
    opacity:0.9;
    ${mobile({width:'75%', })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
`
const Input = styled.input`
    flex: 1;
    min-width: 25%;
    margin: 10px 0px ;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: teal;
    color:white;
    cursor: pointer;
    margin: 10px 0px;
    &:disabled{
        color:teal;
        cursor: not-allowed;
    }
`
const BottomText = styled.span`
    margin:5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const {isFetching, error } = useSelector((state)=>state.user)

    const handleClick=(e)=>{
        e.preventDefault()
        login(dispatch, {username, password})

    }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                {isFetching && <span style={{fontSize:12, color:"teal",}}> Getting Ready...</span>} <br />
               { error && <span style={{fontSize:11, color:"red", marginTop:10}}>Invalid credentials</span>}
                <Form>
                    <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)} required/>
                    <Input placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

                    <Button onClick={handleClick} disabled={isFetching}>
                        LOGIN
                        </Button>

                    <BottomText>
                        <Link to='#'>FORGOT PASSWORD?</Link>
                        </BottomText>

                    <BottomText>
                        <Link to='/register'>CREATE A NEW ACCOUNT</Link>
                        </BottomText>

                    <BottomText style={{textAlign:'center', marginTop: '20px'}}>
                        <Link to='/'>Back to Home</Link>
                        </BottomText>   
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
