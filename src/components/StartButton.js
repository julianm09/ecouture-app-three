import React from 'react';
import styled from 'styled-components';
import { color, colors } from './color'

const StartButtonUI = styled.button`

    height: 100px;
    width: 365px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.5); 
    border-radius: 10px;
    background-color: ;
    color: white;
    font-size: 24px;
    font-weight: bold;
    

    `

export const StartButton = ({}) => {

    return (
        <StartButtonUI
        style={{
            background:colors.blue
        }}>Get Started</StartButtonUI>
    )
}