import React, { useState } from 'react';
import styled from 'styled-components';
import { StoreInside } from '../components/StoreInside';


const StoreContainerUI = styled.div`

width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


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
