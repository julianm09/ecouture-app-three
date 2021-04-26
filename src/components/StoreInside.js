import React, { useState } from 'react';
import styled from 'styled-components';

import { useRouter } from 'next/router'


const StoreInsideUI = styled.div`

width: 90vw;
height: 75px;
font-size: 18px;
font-family: 'Nunito', sans-serif;
border-radius: 15px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border: 1px solid rgba(255, 255, 255, 0.5);
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
cursor: pointer;
`

const StoreSubheadUI = styled.div`

font-size: 12px;
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

export const StoreInside = ({ currentStore, setCurrentStore, storeImage='/store-wildlife.jpeg', storeName='Wildlife Thrift Store', storeLocation='456 Robson St Vancouver'}) => {

  const router = useRouter()

  const handleClick = () => {

   

    setCurrentStore(storeName)


    localStorage.setItem('currentStore', JSON.stringify(storeName))

    router.push('/store')
  }



    return (

        <StoreInsideUI
        onClick = {handleClick}>
          <StoreText>{storeName}</StoreText>
          <StoreSubheadUI>{storeLocation}</StoreSubheadUI>
          <ImageFilter/>
          <img src={storeImage} style={{
            zIndex: '0',
            position: 'absolute',
            top: '-60px',
           
          }}></img>
            
            </StoreInsideUI>
            

    )



}
