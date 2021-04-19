import { Menu } from '../components/Menu'
import React, { useState } from 'react';
import { MaterialButtonSlider } from '../components/MaterialButtonSlider'
import { AboutResourcesCont } from '../components/AboutResourcesCont';
import { RecycleButton } from '../components/RecycleButton';
import { colors } from '../components/color';
import styled from 'styled-components';
import { StoreContainer } from '@/components/StoreContainer';

const Material = styled.div`

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

const MaterialType = styled.div`

display: flex;
text-align: left;
align-self: flex;
margin: 10px 0 0 0;
width: 90vw;

color: white;
font-size: 18px; 
font-family: Open Sans;

`

const SubHeading = styled.div`

display: flex;
text-align: left;
align-self: flex;
margin: 40px 0 20px 0;
width: 90vw;

color: white;
font-size: 24px; 
font-family: Open Sans;

`

const MaterialInfo = styled.div`

display: flex;
text-align: left;
align-self: flex;
margin: 15px 0 100px 0;
width: 90vw;

color: white;
font-size: 18px; 
font-family: Open Sans;

`

const MaterialsPage = ({ pageColor=colors.green, materialText='Bamboo', materialType='Plant', materialImage='/plant-icon.png', materialInfo='Bamboo requires no need for pesticides or fertilizers'}) => {

    const [mySwitch, setMySwitch] = useState(false)


    return (
        <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: pageColor,
                minHeight: '100vh',
            }}>
            <Menu />

            <Material>{materialText}</Material>

            <MaterialType>Type: {materialType} Fiber</MaterialType>

            <img src={materialImage}></img>


            <AboutResourcesCont margin={'50px'} bgColor={colors.green} buttonText={'Resources'} mySwitch={mySwitch} setMySwitch={setMySwitch} />

            
            {mySwitch ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <SubHeading>Where to Recylce</SubHeading>

            <RecycleButton></RecycleButton>

            <RecycleButton buttonText={'Vancouver Recycle'}></RecycleButton>

            <SubHeading>To help save the world check out these sustainable store options near you.</SubHeading>

            <StoreContainer/> 
          </div>
            ) : ( 
          <div>
            <SubHeading>About {materialText}</SubHeading>
            
            <MaterialInfo>{materialInfo}</MaterialInfo>
            
            <MaterialButtonSlider/>
          </div>

            )}


        </div>
    )
}

export default MaterialsPage

