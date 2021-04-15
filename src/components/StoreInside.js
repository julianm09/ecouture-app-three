import React, { useState } from 'react';
import styled from 'styled-components';

const StoreInsideUI = styled.div`

width: 400px;
height: 75px;
font-size: 18pt;
font-family: 'Nunito', sans-serif;
background: blue;
background-image: url("/public/wildthrift.jpg");
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
`

const StoreSubheadUI = styled.div`

font-size: 10pt;
color: white;
font-family: 'Open Sans', sans-serif;
`

export const StoreInside = () => {

    return (

        <StoreInsideUI>
            Wildlife Thrift Store
            <StoreSubheadUI>456 Robson St Vancouver</StoreSubheadUI></StoreInsideUI>

    )



}