import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../components/color'

const RoundBlueButtonUI = styled.div `
height: 50px;
width: 370px;
border-radius: 10px;
background-color: ${props=>props.bgcolor};
margin-top: 20px;
font-family: 'Nunito',sans-serif;
font-size: x-large;
color: ${props=>props.textcolor};
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 4px 4px rgba(0,0,0,.25);
`

export const RoundBlueButton = ({
    buttonText = 'Burnaby',
    bgcolor = colors.blue,
    textcolor = 'white'
}) => {

    return (
        
        <RoundBlueButtonUI
        bgcolor={bgcolor}
        textcolor={textcolor}
        >
            {buttonText}
            </RoundBlueButtonUI>
        
    )
}