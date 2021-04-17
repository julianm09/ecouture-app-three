import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from '../public/color'

const RoundBlueButtonUI = styled.button `
height: 50px;
width: 370px;
border-radius: 10px;
background-color: ${color.blue};
margin-top: 20px;
font-family: 'Nunito',sans-serif;
font-size: x-large;
color: white;
border: 1px solid white;
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


export const RoundBlueButton = () => {

    return (

        <RoundButtonContainer>
            <TopText>Where are you located?</TopText>
        <RoundBlueButtonUI>Burnaby</RoundBlueButtonUI>
        <RoundBlueButtonUI>Vancouver</RoundBlueButtonUI>
        <RoundBlueButtonUI>North Vancouver</RoundBlueButtonUI>
        <RoundBlueButtonUI>Richmond</RoundBlueButtonUI>
        <BottomText>Shopping online contributes significantly more waste than in store.</BottomText>
       </RoundButtonContainer>
        
    )
}