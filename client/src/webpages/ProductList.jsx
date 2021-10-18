import React, { useState } from 'react'
import HomePage from './HomePage'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { useLocation } from 'react-router'


const Container = styled.div``;
const Title = styled.h1`
    margin:20px;
`;
 

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.h3`
margin: 20px;

`;
const Select = styled.select`
    padding: 8px;
    margin-right: 20px;
    background-color: #E5C0C8;
    z-index: 1;


`;
const Option = styled.option`
   background-color: #E5C0C8;
    `;

const FilterText = styled.div`
         font-size:20px;
        font-weight:600;
        margin-right:15px;
`;
const ProductList = () => {

    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    console.log(cat);
    const [filters, setFilters] = useState({})
    const[sort, setSort] = useState('newest');

    const handleFilters = (e)=>{
        const selectedFilter = e.target.value;
        setFilters({
            ...filters,
            [e.target.name] :selectedFilter,
        })

    }
    console.log(filters);
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title> {cat.toUpperCase()} </Title>
            <FilterContainer>
                <Filter>
                        <FilterText> Filter Products:</FilterText>
                        <Select name="color" onChange = {handleFilters}>
                            <Option disabled selected>Color</Option>
                            <Option>Black</Option>
                            <Option>White</Option>
                            <Option>Blue</Option>
                            <Option>Green</Option>
                            <Option>Yellow</Option>
                            <Option>Gray</Option>
                            <Option>Red</Option>

                        </Select>
                        <Select  name="size" onChange = {handleFilters}>
                        <Option disabled >Size</Option>
                            <Option>Extra Small</Option>
                            <Option>Small</Option>
                            <Option>Medium</Option>
                            <Option>Large</Option>
                            <Option>X-Large</Option>
                            </Select>
                </Filter>
                <Filter>
                <FilterText> Sort Products:</FilterText>
                <Select onChange={e=>setSort(e.target.value)}>
                <Option value ="newest" >Newest</Option>
                <Option value ="desc"> Price(Highest-Lowest) </Option>
                <Option value ="asc"> Price (Lowest-highest)</Option>
                           </Select>

                </Filter>
            </FilterContainer>
           {cat? <Products cat ={cat} filters ={filters} sort={sort}/>
           :<Products cat="All Products" filters={filters} sort={sort}/>}
           <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
