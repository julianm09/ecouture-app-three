import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../components/color'
import { RoundBlueButton } from './RoundBlueButton'



const RoundButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 175px;
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
    infoText = "Shopping online contributes significantly more waste than in store.",
    bgColor = colors.blue,
    mySwitch,
    setMySwitch
}) => {

    const handleClick = () => {

        setMySwitch(!mySwitch)
    
      }

    return (

        <RoundButtonContainer style={{margin: margin}}>
            <TopText>{questionText}</TopText>
         <RoundBlueButton 
                 onClick={() => setMySwitch(true)}

                 style={{
                   backgroundColor: mySwitch ? "white" : bgColor,
                   color: mySwitch ? bgColor : "white",}}
                   />

         <RoundBlueButton 
          onClick={() => setMySwitch(true)}

          style={{
            backgroundColor: mySwitch ? "white" : bgColor,
            color: mySwitch ? bgColor : "white",}}
            buttonText="Vancouver"
            />

        <RoundBlueButton 
          onClick={() => setMySwitch(true)}

          style={{
            backgroundColor: mySwitch ? "white" : bgColor,
            color: mySwitch ? bgColor : "white",}}
            buttonText="North Vancouver"
            />
            
            <RoundBlueButton 
          onClick={() => setMySwitch(true)}

          style={{
            backgroundColor: mySwitch ? "white" : bgColor,
            color: mySwitch ? bgColor : "white",}}
            buttonText="Richmond"
            />
            
        <BottomText>{infoText}</BottomText>

        </RoundButtonContainer>
     
    )
}