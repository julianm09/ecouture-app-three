import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from '../components/color'

const TopText = styled.div`

color: black;
font-family: 'Nunito',sans-serif;
color: white;
`

const TotalContainer = styled.div`

display: flex;
flex-direction: column;


`

const BodyText = styled.div`

color: black;
font-family: 'Nunito',sans-serif;
margin-top: 25px;
color: white;
`

const BottomText = styled.div`

color: black;
font-family: 'Nunito',sans-serif;
margin-top: 75px;
font-weight: bold;
color: white;
`

export const ContactUsContainer = ({contact, address, twitter, facebook, instagram}) => {

    return (
        <TotalContainer>
       <TopText>{contact}</TopText>
       <BodyText>{address}</BodyText>
       <BodyText>{twitter}</BodyText>
       <BodyText>{instagram}</BodyText>
       <BodyText>{facebook}</BodyText>

        </TotalContainer>
    )
}