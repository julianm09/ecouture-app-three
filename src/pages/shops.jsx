import { Menu } from '../components/Menu'
import React, { useState } from 'react'
import { colors } from '../components/color'
import { FiberButtonContainer } from '../components/FiberButtonContainer'
import { StoreContainer } from '../components/StoreContainer'
import { MaterialButtonSlider } from '../components/MaterialButtonSlider'
import { StoreText } from '@/components/StoreText'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: ${colors.blue};
    flex-direction: column;

`

const Shops = ({ }) => {


  return (

    <>

    <Menu/>
 
    <Container>

        
        <StoreText/>

        <StoreContainer />

      </Container>

</>
     

  )
}

export default Shops
