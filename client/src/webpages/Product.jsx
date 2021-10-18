import React from 'react'
import styled from'styled-components'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material';
import { publicRequest } from './requestMethod';
import { useLocation } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { addProduct } from '../redux/cartRedux';
import {useDispatch} from 'react-redux';

const Container = styled.div``;
const Wrapper = styled.div`
padding: 50px;
display:flex;

`;
const InfoContainer = styled.div`
flex:1;
padding:0 50px;
`;

const ImageContainer = styled.div`
flex:1;`;
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
`;
const Title = styled.h1`
font-weight: 200;


`;
const Desc = styled.p`
    margin:20px 0px;
`;
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;

const FilterContainer = styled.div`
    display: flex;
    width:50%;
    margin: 30px; 
    justify-content: space-between;

`;
const FilterTitle = styled.div`
    font-size:20px;
    font-weight:200;
    margin-right:20px;
    `;
const Filter = styled.div`
display:flex;
align-items: center;
margin-left:20px;


`;
const FilterColor = styled.div`
    width: 20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin:0 6px;
    cursor:pointer;

`;
const FilterSize = styled.select`
    margin-left:10px;
    padding:10px;
    font-size: 20px;
`;
const FilterSizeOption = styled.option`

`;
const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items: center;
    justify-content: space-between;

`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border:1px solid teal;
    margin: 0 5px;
`;
const Button = styled.button`
    padding:15px;
    border:1px solid teal;
    cursor:pointer;
    font-weight: 500;

    &:hover{
        background-color: #F8F4f4;

    }

`;



const Product = () => {

    const location = useLocation();
    const id = location.pathname.split('/')[2];

    const [product,setProduct] = useState({});
    const[quantity, setQuantity]= useState(1);
    const [color,setColor] = useState({color:"red"});
    const [size,setSize] = useState({size:"M"});
    const dispatch = useDispatch();
    const handleClick=()=>{
        dispatch(
        addProduct({...product, quantity, color, size})
        );}
    const handleQuantity=(type)=>{
        if(type==="decr"){
            quantity>1&& setQuantity(quantity-1);
        }
        else{
            setQuantity(quantity+1);
        }
    }
    useEffect(()=>{
        const getProduct = async()=>{
            try{
                    const res = await publicRequest.get("/products/find/"+ id);
                    setProduct(res.data);
            }
            catch{}
        };
        getProduct();
    }, [id]);
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImageContainer>
                    <Image src = {product.img}/>

                </ImageContainer>
                <InfoContainer>
                    <Title> {product.title} </Title>
                    <Desc> {product.desc}</Desc>
                    <Price> {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((c)=>(
                                <FilterColor color= {c} key ={c} onClick={()=>setColor(c)}/>

                            ))};
                              

                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e)=>setSize(e.target.value)}>
                                {product.size?.map((s)=>(
                                <FilterSizeOption key = {s} >{s}</FilterSizeOption>

                                ))};

                            </FilterSize>

                        </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove onClick = {()=>handleQuantity("decr")}/>
                                <Amount> {quantity} </Amount>
                                <Add onClick = {()=>handleQuantity("incr")}/>
                                </AmountContainer>
                                <Button onClick={handleClick}>Add to Cart</Button>
                        </AddContainer>
                
                </InfoContainer>

                
            </Wrapper>
            <Newsletter/>
            <Footer/>

        </Container>
    )
}

export default Product
