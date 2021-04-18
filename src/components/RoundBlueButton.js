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
color: white;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 4px 4px rgba(0,0,0,.25);
`

const RoundButtonContainer = styled.div`
display: flex;
flex-direction: column;
`

const BottomText = styled.div`
display: flex;
color: white;
font-family: 'Nunito',sans-serif;
font-size: large;
margin-top: 50px;
max-width: 350px;
`

const TopText = styled.div`
display: flex;
color: white;
font-family: 'Nunito',sans-serif;
font-size: xx-large;
max-width: 350px;
justify-content: center;
margin-bottom: 50px;
`


export const RoundBlueButton = ({
    buttonText = 'Burnaby',
    bgcolor = colors.blue,
}) => {

    return (
        
        <RoundBlueButtonUI bgcolor={bgcolor}>{buttonText}</RoundBlueButtonUI>
        
    )
}