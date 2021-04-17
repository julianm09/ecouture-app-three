import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from './color';

 
const FiberButtonUI = styled.div `
    display: flex;
    width: 90vw;
    height: 75px;
    box-shadow: 0px 4px 4px rgba(128,128,128,0.5);
    border-radius: 10px;
    border: ${props=>props.borderStyle};
    background-color: ${props=>props.bg};

    &>* {
        color: ${props=>props.textCol};
        font-family: 'Nunito';
    }

    &:focus{
        outline: none;
    }
`

const FiberText = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    flex: 2;
    
`
const FiberImg = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    
`

const FiberNameText = styled.h4 `
    margin: 5px;
`
const FiberExamplesText = styled.h6 `
    margin: 5px;
`

export const FiberButton = ({
    fiberName="Cotton Fiber",
    fiberExamples="Organic Cotton, Cotton",
    bgcolor="#36B9C5",
    textCol="white",
    borderStyle="1px solid white"
}) => {
    return (
    
        <FiberButtonUI bg={bgcolor} textCol={textCol} borderStyle={borderStyle}>
            <FiberImg>ImageHere</FiberImg>
                <FiberText>
                    <FiberNameText>
                        {fiberName}
                    </FiberNameText>

                    <FiberExamplesText>
                        {fiberExamples}
                    </FiberExamplesText>
                </FiberText>
        </FiberButtonUI>

)} 