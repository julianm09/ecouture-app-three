import React from 'react';
import styled from 'styled-components';
import { colors } from './color'

const StartButtonUI = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 365px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: ;
    color: white;
    font-size: 24px;
    font-weight: bold;
    font-family: Nunito;

    

    `

export const StartButton = ({}) => {

    return (
        <StartButtonUI>Get Started</StartButtonUI>
    )
}