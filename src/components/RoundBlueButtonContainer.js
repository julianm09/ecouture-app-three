import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../components/color'
import { RoundBlueButton } from './RoundBlueButton'



const RoundButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 200px;
`

const BottomText = styled.div`
display: flex;
color: white;
font-family: 'Nunito',sans-serif;
font-size: large;
margin-top: 70px;
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


export const RoundBlueButtonContainer = ({
    margin,
    questionText = "Where are you located?",
    infoText = "Shopping online contributes significantly more waste than in store."


}) => {

    return (

        <RoundButtonContainer style={{margin: margin}}>
            <TopText>{questionText}</TopText>
         <RoundBlueButton />
         <RoundBlueButton buttonText="Vancouver"/>
         <RoundBlueButton buttonText="North Vancouver"/>
         <RoundBlueButton buttonText="Richmond"/>
        <BottomText>{infoText}</BottomText>

        </RoundButtonContainer>
     
    )
}