import React from 'react';
import styled from 'styled-components';
import { catagories } from '../items';
import CatagoryItem from './CatagoryItem';

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content: space-between;
    background-color: #E5C0C8;
    overflow-x:scroll;
`;



 const Catagories = () => {
    return (
        // eslint-disable-next-line no-restricted-globals
        <Container style={{overflowX:scroll}}>
            {catagories.map(item=>(
                    <CatagoryItem item={item} key ={item.id}/>
            ))};
        </Container>
    )
}
export default Catagories