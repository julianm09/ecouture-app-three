import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from '../public/color'

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

export const ContactUsContainer = () => {

    return (
        <TotalContainer>
       <TopText>487 - 564 - 3324</TopText>
       <BodyText>456 Robson St Vancouver</BodyText>
       <BodyText>@wildlifethrift</BodyText>
       <BodyText>@wildlife</BodyText>
       <BottomText>About Wildlife Thrift</BottomText>
        </TotalContainer>
    )
}