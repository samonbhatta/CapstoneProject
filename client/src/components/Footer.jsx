import { Email, FacebookRounded, Google, Instagram, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from'styled-components'
import Newsletter from './Newsletter';
import { Link } from 'react-router-dom';
const Container = styled.div`
    display:flex;
    background-color: lightgray;

`;
const LeftSide = styled.div`
flex:1;
display:flex;
padding:20px;
flex-direction: column;

`
const RightSide = styled.div`
flex:1;
padding:20px;
`;
const Center = styled.div`
flex:1;
padding: 20px;

`;

const Title = styled.h3`
margin-bottom: 20px;


`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style:none;
flex-wrap:wrap;
`;
const ListItem = styled.li`
        width:50%;
        margin-bottom:10px ;
        float:left;
        /* display: inline-block; */

`;
const Logo = styled.h1    ``;
const Desc = styled.p`
margin:20px o;
cursor: pointer;

`;
const SocialIcons = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items: center;
justify-content: center;
margin:2px;
word-spacing:2px;
font-weight:300px;


`;
const SocialContainer = styled.div`
display:flex;


`;

const ContactItem = styled.div` 
margin-bottom: 20px;
display:flex;
align-items: center;

`;
const Payment = styled.img`
width:100%;
`;


const Footer = () => {
    return (
        <Container>
            <LeftSide>
            <Logo>SHOPCHOP</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero sequi odit temporibus quam, ad, vel nesciunt totam inventore sunt quo illum beatae esse. Accusantium possimus quos magnam quisquam saepe.</Desc>
            <SocialContainer>
                <SocialIcons color="3B5999">
                <FacebookRounded/> </SocialIcons>
                <SocialIcons color="E4405F">
                <Instagram/>
                </SocialIcons>
                <SocialIcons color="55ACEE">
                <Twitter/>
                </SocialIcons>
                <SocialIcons color="E60023">
                <Pinterest/>
                </SocialIcons>
                <SocialIcons color='BDC3C7'> 
                <Google/>
                </SocialIcons >
            </SocialContainer>
            </LeftSide>
            <Center>
                <Title> Useful Links </Title>
                    <List>
                            <Link to = "/">
                            <ListItem>Home</ListItem>
                            </Link>
                            <Link to ="/cart">
                            <ListItem>Go to Cart</ListItem>
                            </Link>
                            <Link to="/product_list/Men">
                            <ListItem>Men Fashion</ListItem>
                            </Link>
                            <Link to={"/product_list/Women"}>
                            <ListItem>Women Fashion</ListItem>
                            </Link>
                            <ListItem>Accessories</ListItem>
                            <ListItem>My Account</ListItem>
                            <ListItem>Wishlist</ListItem>
                            <ListItem>Terms and Conditions</ListItem>

                    </List>
           
            </Center>
            <RightSide>
                <Title> Get in Touch</Title>
                <ContactItem>
                    <Room /> 
                        1111 Lex Ave, South Winchester, MA, 22222
                </ContactItem>
                <ContactItem>
                    <Phone/>
                        (703)-999-9999
                </ContactItem>
                <ContactItem>
                   <Email/>     contact@ShopChop.com
                </ContactItem>
                <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
            </RightSide>
        </Container>
    )
}

export default Footer
