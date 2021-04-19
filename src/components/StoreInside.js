import React, { useState } from 'react';
import styled from 'styled-components';

const StoreInsideUI = styled.div`

width: 90vw;
height: 75px;
font-size: 18pt;
font-family: 'Nunito', sans-serif;
border-radius: 15px;
box-shadow: 0px 5px 8px #888888;
display: flex;
flex-direction: column;
color: white;
align-items: center;
text-align: center;
justify-content: center;
margin-bottom: 25px;
overflow: hidden;
object-fit: contain;
position: relative;
`

const StoreSubheadUI = styled.div`

font-size: 10pt;
color: white;
font-family: 'Open Sans', sans-serif;
z-index: 200;
`
const ImageFilter = styled.div`
background: #3884FF;
opacity: 70%;
position: absolute;
z-index: 100;
top: 0;
width: 100%;
height: 100%;
`
const StoreText = styled.div`
z-index: 200;
`

export const StoreInside = ({ storeImage='/store-wildlife.jpeg', storeName='Wildlife Thrift Store', storeLocation='456 Robson St Vancouver'}) => {

    return (

        <StoreInsideUI>
          <StoreText>{storeLocation}</StoreText>
          <StoreSubheadUI>{storeName}</StoreSubheadUI>
          <ImageFilter/>
          <img src={storeImage} style={{
            zIndex: '0',
            position: 'absolute',
            top: '-60px',
           
          }}></img>
            
            </StoreInsideUI>
            

    )



}
