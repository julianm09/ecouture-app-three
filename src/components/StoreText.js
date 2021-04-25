import React, { useState } from 'react';
import styled from 'styled-components';

const StoreTextUI = styled.div`

width: 90vw;
margin: 25px 0 25px 0;
color: white;
font-size: 24px;
font-family: 'Nunito', sans-serif;


`

export const StoreText = ({}) => {

    return (

        <StoreTextUI>To help save the world check out these sustainable store options near you.</StoreTextUI>
    )
}
