import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../components/color';
import { useRouter } from 'next/router'


const RoundBlueButtonUI = styled.div `
height: 50px;
width: 80%;
border-radius: 10px;
background-color: ${props=>props.bgcolor};
margin-top: 20px;
font-family: 'Nunito',sans-serif;
font-size: 16px;
font-weight: 700;
color: ${props=>props.textcolor};
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
cursor: pointer;
`

export const RoundBlueButton = ({
    text = 'Burnaby',
    bgcolor = colors.blue,
    textcolor = 'white',
}) => {

    const handleClick = () => {
        router.push('/results')
        
    }

    const router = useRouter()

    return (
        
        <RoundBlueButtonUI
        bgcolor={bgcolor}
        textcolor={textcolor}
        onClick = {handleClick}
        >
            {text}
            </RoundBlueButtonUI>
        
    )
}