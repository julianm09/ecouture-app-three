import { Menu } from '../components/Menu';
import React, { useState } from 'react';
import { AboutResourcesCont } from '../components/AboutResourcesCont';
import { colors } from '../components/color';
import { RecycleButton } from '../components/RecycleButton';
import styled from 'styled-components';
import { ContactUsContainer } from '../components/ContactContainer';



const StoreName = styled.div`
  
display: flex;
text-align: left;
align-self: flex;
margin: 150px 0 0 0;
width: 90vw;

color: white;
font-size: 36px; 
font-family: Nunito;
font-weight: bold;
`

const SubHead = styled.div`

display: flex;
text-align: left;
align-self: flex;
margin: 40px 0 20px 0;
width: 90vw;

color: white;
font-size: 24px; 
font-family: Open Sans;
`

const BodyText = styled.div`

display: flex;
text-align: left;
align-self: flex;
margin: 15px 0 100px 0;
width: 90vw;

color: white;
font-size: 18px; 
font-family: Open Sans;
`


const StorePage = ({ pageColor, storeText='Wildlife Thrift Store', storeImg='store-wildlife.jpeg', bodytext='We are a for-profit business that donates to local, neighborhood charities quarterly. We have been serving the people of Vancouver, with pride, since 1997 a legend here on The Granville Strip. Family-owned operated, we believe in one single, simple concept: by recycling we are not only able to preserve our environment, but we are granted the privilege of giving back to our community.  What began supporting The Wildlife Rescue Association now solely supports people-oriented charities with a focus on helping those dealing with Homelessness Mental Health issues. Each charity holds a special place in our heart: Coast Mental Health, The Gathering Place and Covenant House  Through your ongoing and generous support, we have been able to donate hundreds of thousands of dollars to these Charities.  Thank you Vancouver and to our donors and shoppers everywhere! You are not only helping to preserve our planet, you enable us to recycle give back.'}) => {

  const [mySwitch, setMySwitch] = useState(false)


return (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: colors.blue,
    minHeight: '100vh',
  }}>
    
    <Menu />

    <StoreName>{storeText}</StoreName>

    <img src={storeImg}></img>

    <RecycleButton bgColor={colors.blue} buttonText={'Visit Site'}></RecycleButton>

    <AboutResourcesCont margin={'50px'} bgColor={colors.blue} buttonText={'Contact'} mySwitch={mySwitch} setMySwitch={setMySwitch} />

    {mySwitch ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            
        }}>

          <SubHead>Contact</SubHead>

          <ContactUsContainer></ContactUsContainer>

        </div>
    ) : (

      <div>
      <SubHead>About {storeText}</SubHead>

      <BodyText>{bodytext}</BodyText>
      </div>

    )}


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


export default StorePage