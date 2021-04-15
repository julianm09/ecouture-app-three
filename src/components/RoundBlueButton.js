import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from './color'


const RoundBlueButtonUI = styled.button `

height: 50px;
width: 370px;
border-radius: 10px;
`
export const RoundBlueButton = () => {

    return (
        <RoundBlueButtonUI
        style={{
            background: colors.blue
        }}>test this button</RoundBlueButtonUI>
    )
}