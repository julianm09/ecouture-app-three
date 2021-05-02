import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from './color';

 
const FiberButtonUI = styled.div `
    display: flex;
    width: 90vw;
    height: 50px;
    
    border-radius: 10px;
    border: ${props=>props.borderStyle};
    background-color: ${props=>props.bg};
    cursor: pointer;
    position: relative;
    transition: 0.2s ease;

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

    &> img{
        width: 25px;
    }
    
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
    borderStyle="1px solid white",
    material='cotton',
    setChangePage,
    image='/cotton-icon.svg',
    changePage

}) => {
    return (
    
        <FiberButtonUI
        style={{
            border: changePage == material ? '1px solid' + bgcolor : '1px solid rgba(255, 255, 255, 0.5)',
            background: bgcolor,
            color: 'white',
            left: changePage == material ? '-12vw' :'0',
            boxShadow: changePage == material ? 'none' : '0px 4px 4px rgba(0, 0, 0, 0.25)',

        }} onClick={() => setChangePage(material)} borderStyle={borderStyle}>
            <FiberImg><img src={image}></img></FiberImg>
                <FiberText>
                    <FiberNameText>
                        {fiberName}
                    </FiberNameText>

      {/*               <FiberExamplesText>
                        {fiberExamples}
                    </FiberExamplesText> */}
                </FiberText>
        </FiberButtonUI>

)} 