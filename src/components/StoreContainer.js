import React, { useState } from 'react';
import styled from 'styled-components';
import { StoreInside } from '../components/StoreInside';


const StoreContainerUI = styled.div`

width: 500px;
height: 400px;
display: flex;
flex-direction: column;


`

export const StoreContainer = () => {

    return (
        <StoreContainerUI>
            <StoreInside></StoreInside>
            <StoreInside></StoreInside>
            <StoreInside></StoreInside>
            <StoreInside></StoreInside>
        </StoreContainerUI>
    )



}