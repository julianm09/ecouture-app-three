import { Menu } from '../components/Menu';
import React, { useState } from 'react';
import { AboutResourcesCont } from '../components/AboutResourcesCont';
import { colors } from '../components/color';
import { RecycleButton } from '../components/RecycleButton';
import styled from 'styled-components';
import { ContactUsContainer } from '../components/ContactContainer';
import { StoreDescription } from '../components/StoreDescription';


export const StorePage = ({ pageColor, storeText='Wildlife Thrift Store', storeImg='store-wildlife.jpeg', bodytext='We are a for-profit business that donates to local, neighborhood charities quarterly.'}) => {

  const [mySwitch, setMySwitch] = useState(false)

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

      <StoreDescription></StoreDescription>
      </div>

    )}



</div>
)



}
