import { RoundBlueButtonContainer } from '@/components/RoundBlueButtonContainer';
import { colors } from '@/components/color';
import React, { useState } from 'react';



export const IntroPage = ({ pageColor }) => {

    return (
        <div>

<div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '30vh',
      backgroundColor: colors.blue,
  }}>
    <img src="logo-small.png" style={{marginTop: '50px'}}></img>
    <RoundBlueButtonContainer>
    </RoundBlueButtonContainer>

    </div>
    </div>
    )
}
