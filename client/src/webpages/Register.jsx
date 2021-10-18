import React from 'react'
import styled from 'styled-components'
import Catagories from '../components/Catagories';
import Navbar from '../components/Navbar';

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
    width:40%;
    height:60%;
    padding: 20px;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
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
    padding:10px;

`;
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color: gray;
    cursor:pointer;
    `;

const Register = () => {
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <Title> CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="lastname"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm passowrd"/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        information data in accordance with the <b> PRIVACY POLICY</b>
                    </Agreement>
                    <Button> Create</Button>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
