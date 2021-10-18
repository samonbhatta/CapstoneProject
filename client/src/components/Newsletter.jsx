import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:30vh;
    background-color: #7beee4;
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;

`;
const Title = styled.h1`

    font-size:50px;
    letter-spacing: 2px;
    font-weight:600;
    
    `;
const Description = styled.div`

    font-size: 24px;
    font-weight: 300;
    margin-bottom:20px;
    `;
const InputContainer = styled.div`
    width:50%;
    height:40px;
    display: flex;
    justify-content:space-between;
    background-color:white;


`;
const Button = styled.button`
    border:none;
    flex:1;
    background-color:#7beee4;
    &:hover{
        transform:scale(1.2);
    }
`;
const Input = styled.input`
   border:none;
   flex:8;
    padding-left:20px;
    background-color: #CBD5F0;

    `;

const Newsletter = () => {
    return (
        <Container>
          <Title>SUBSCRIBE AND SAVE!!</Title>
          <Description>Provide us you email and contact number to get all updates!</Description>
          <InputContainer>
          <Input placeholder="Your Email Address"/>
          <Input placeholder="Your Phone Number(Optional)"/>
          <Button>
                        <Send/>
                </Button>
          </InputContainer>
                
                
        </Container>
    )
}

export default Newsletter
