import { RoundBlueButtonContainer } from '@/components/RoundBlueButtonContainer';
import { colors } from '@/components/color';
import React, { useState } from 'react';
import { RoundBlueButton } from '@/components/RoundBlueButton';



const IntroPage = ({ pageColor }) => {

    const [mySwitch, setMySwitch] = useState(false)
    
    return (
        <div>

<div style={{ // Serves as background for the page //
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: colors.blue, // This is only a placeholder background color until the wave is created //
  }}>
    <img src="logo-small.png" style={{marginTop: '50px'}}></img>
    
    <RoundBlueButtonContainer
    mySwitch={mySwitch} setMySwitch={setMySwitch}
    >
        {mySwitch ? (RoundBlueButton.bgColor = 'white', RoundBlueButton.color = colors.blue) : (RoundBlueButton.backgroundColor = colors.blue, RoundBlueButton.color = "white")}
    </RoundBlueButtonContainer>

    </div>
    </div>
    )
}

export default IntroPage