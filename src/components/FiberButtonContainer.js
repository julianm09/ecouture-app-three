import React, { useState } from 'react';
import styled from 'styled-components';
import { FiberButton } from './FiberButton';
import { colors } from './color'



const FiberButtonContainerUI = styled.div `
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 100vw;

    div {
        margin:10px;
    }
`

export const FiberButtonContainer = ({
    setChangePage
}) => {
    return (

        <FiberButtonContainerUI>
            <FiberButton fiberName={'Cotton Fiber'} fiberExamples={'Organic Cotton, Cotton'} bgcolor={'#36B9C5'} textCol={"white"} borderStyle={'1px solid white'}></FiberButton>
            <FiberButton fiberName={'Animal Fiber'} fiberExamples={'Wool, Leather'} bgcolor={'#E67C20'} textCol={"white"} borderStyle={'1px solid white'}></FiberButton>
            <FiberButton fiberName={'Plant Fiber'} fiberExamples={'Bamboo, Lyocell'} bgcolor={'#51B27E'} textCol={"white"} borderStyle={'1px solid white'}></FiberButton>
            <FiberButton fiberName={'Synthetic Fiber'} fiberExamples={'Polyester, Nylon'} bgcolor={'#AF75BD'} textCol={"white"} borderStyle={'1px solid white'}></FiberButton>
        </FiberButtonContainerUI>
    
)}