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





    <style jsx global>{`

@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800;900&family=Nunito:wght@300;400;600;700;800;900&family=Open+Sans:wght@300;400;600;700;800&display=swap');

  
          html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            font-family: Nunito;
            
          }
  
          * {
        
          margin: 0
        }
  
        a{
          color: white;
        }
      `}
      </style>
    </div>
    )
}

export default IntroPage