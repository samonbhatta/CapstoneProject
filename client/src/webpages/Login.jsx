import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Catagories from '../components/Catagories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { login } from '../redux/apiCalls';
import{useDispatch, useSelector} from "react-redux";
import { useState } from 'react';
const Container = styled.div`
    background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),   url("https://cdn.stocksnap.io/img-thumbs/960w/man-male_J7YRJBKV9D.jpg") center;
    background-size:cover;
            min-height:100vh;
            display:flex;
            align-items: center;
            justify-content: center;
`;
const Wrapper = styled.div`
background-color: #eaf8c9;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width:25%;
    height:60%;
    padding: 20px;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
padding:25px;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin:20px 0;

`;
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin:20px 10px 0 0;


`;
const Button = styled.button`
    width:30%;
    border:none;
    padding:10px 10px;
    background-color: blue;
    cursor:pointer;
    margin: 15px 0;
    &:disabled{
        color:gray;
        cursor: not-allowed;
    }
    `;
const Link = styled.a`
    margin:5px 0;
    font-size: 12px;
    text-decoration:underline;
    cursor:pointer;
    
`;
const Error = styled.span`
color: red;;

`;

const Login = () => {

    const [username, setUsername] = useState("");
    const[password, setPassword] = useState("");
     const dispatch = useDispatch()
    const handleClick = (e)=>{
        e.preventDefault()
        login(dispatch, {username, password})
    }
    const{isFetching, error} = useSelector(state => state.user)
     return (
        <Container>
            <Wrapper>
                <Title> SIGN IN</Title>
                <Form>
                    <Input placeholder="username"
                    onChange={(e)=>setUsername(e.target.value)}
                    
                    />
                    <Input placeholder="password"
                     onChange={(e)=>setPassword(e.target.value)}/>
                    <Button onClick= {handleClick} disabled={isFetching}> LOGIN</Button>
                    {error && <Error> Something went wrong. Please try again.</Error>}
                    <Link> Forgot Passowrd?</Link>
                    <Link> Create New Account</Link>

                </Form>

              
            </Wrapper>
        </Container>
    )
}

export default Login
