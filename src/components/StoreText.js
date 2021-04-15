import React, { useState } from 'react';
import styled from 'styled-components';

const StoreTextUI = styled.div`

width: 400px;
height: 125px;
color: gray;
font-size: 24pt;
font-family: 'Nunito', sans-serif;


`

export const StoreText = ({}) => {

    return (

        <StoreTextUI>To help save the world check out these sustainable store options near you.</StoreTextUI>
    )
}