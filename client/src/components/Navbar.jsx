import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

//Have to install extension for recognizing this component. 

const Container = styled.div`
    height:60px;
    background-color: #CBD5F0;
`;

const LanguageOption = styled.span`
    font-size:14px;
    cursor:pointer;

`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items:center;
    //justify-content: space-between;
`;
const SearchContainer = styled.div`
    border : 0.5px solid gray;
    display: flex;
    align-items: center;
    margin-left:25px;
    padding:5px;
`;

const InputBox = styled.input`
    &:hover{
        background-color: CBD5F0;
    }
    border:none;
    background-color: #CBD5F0;
    
`;
const Logo = styled.div`
    font-weight:1000;
    font-family: 'Bonheur Royale', cursive;
    font-size:30px;
    cursor:pointer;
    &:hover{
       transition:scale(1.5);
    }

`;
const LeftComponent = styled.div`
    flex:1;
    display:flex;
    align-items:center;

`;
const CenterComponent = styled.div`
    flex:1;
    text-align: center;
  
    align-items:center;
    
    
    `;

const RightComponent = styled.div`
    display:flex;
    flex:1;
    align-items:center;
    justify-content:flex-end;

`;
const MenuItems = styled.div`
    font-size:14px;
    cursor: pointer;
    padding-left: 25px;
    
 
`;

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <Container>
        <Wrapper>
            <LeftComponent>
                <LanguageOption>EN</LanguageOption>
                <LanguageOption>SP</LanguageOption>
                    <SearchContainer>
                        <InputBox/>
                        <Search style={{color:"white", fontSize:18}}/>
                       
                    </SearchContainer>
                </LeftComponent>    
            <CenterComponent>
                <Logo> ShopChop</Logo>    
               
             </CenterComponent>
             
            <RightComponent>
             <MenuItems> Sign up! </MenuItems>
             <MenuItems> Log in </MenuItems>
             <Link to ="/cart">
             <MenuItems>
               
                <Badge badgeContent={quantity} color="primary"> 
                    <ShoppingCartOutlined/> 
                 </Badge> 
                </MenuItems>
            </Link>
                </RightComponent>
        </Wrapper>
        </Container>
            
        
    )
}

export default Navbar
