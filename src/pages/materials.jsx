import { Menu } from '../components/Menu'
import React, { useState, useEffect } from 'react'
import { colors } from '../components/color'
import { FiberButtonContainer } from '../components/FiberButtonContainer'
import { StoreContainer } from '../components/StoreContainer'
import { MaterialButtonSlider } from '../components/MaterialButtonSlider'
import { StoreText } from '@/components/StoreText';
import styled from 'styled-components'

const HeaderUI = styled.div`

font-family: Nunito;
font-weight: 700;
font-size: 24px;
color: white;
padding: 0 0 50px 0;

text-align left;
width: 90vw;


`

const Materials = ({ pageColor = colors.teal, fiberName = 'Cotton' }) => {
  const [changePage, setChangePage] = useState('cotton')

  return (
    <div
   
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:
          changePage == 'cotton'
            ? colors.cyan
            : changePage == 'plant'
            ? colors.green
            : changePage == 'synthetic'
            ? colors.purple
            : colors.orange,
        minHeight: '100vh',
      }}
    >
      <Menu />

      <div id='spacer' style={{ height: '150px' }}></div>

      <HeaderUI>Select a material type</HeaderUI>

      <FiberButtonContainer changePage={changePage} setChangePage={setChangePage} />

      

      <div
        style={{
          width: '90vw',
          fontSize: '36px',
          fontFamily: 'Nunito',
          fontWeight: 'Bold',
          color: 'white',
          margin: '0 0 50px 0',
          
        }}
      >
 
      </div>

      

      <MaterialButtonSlider changePage={changePage} />

      <div id='spacer' style={{ height: '50px' }}></div>



      
    </div>
  )
}

export default Materials
