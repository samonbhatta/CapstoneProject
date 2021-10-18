import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

<style>

</style>

const Container = styled.div`
margin:3px;
height:20%;
display:flex;
align-items: center;
justify-content: center;

&:hover{
        background-color: #a7a7fd;
        

    };
`

const Image = styled.img`
width:100%;
height:100%;
object-fit:fit;
`

const Title = styled.h1`
    letter-spacing:1px;
    color:smokegray;
    margin-bottom :20px;
    font-weight:800;
    `;
const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:gray;
    cursor:pointer;
    font-weight: 600;
    transition: all 0.5s ease-in-out;
    &:hover{
        transform:scale(1.2);
        background-color: #5a5a68;
        

    };
`;
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;


const CatagoryItem = ({item})=>{

    return (

        <Container>
        <div className="card" >
        <img className="card-img-top" src={item.img} alt="Card image cap" style = { {alignItems:'center'}, {height:500}}/>
        <div className="card-body">
         <h2 className="card-title">{item.title}</h2>
        
        <p className="card-text">{item.desc}</p>
       
       
        <Link to={`/products/${item.cat}`}>
        <a href="#" className="btn btn-primary">SHOP NOW</a> </Link>
     </div>
        </div>
            </Container>
            

    )
}
export default CatagoryItem

