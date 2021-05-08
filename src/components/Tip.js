import ThreeCanvas from '../components/layout/_canvas'

import { Menu } from '../components/Menu'
/* import '../styles/index.module.css'*/
import React, { useState, useEffect } from 'react'
import { colors } from '@/components/color'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import * as Icon from 'react-feather'

const Fact = styled.div`
position: absolute;
width: 100%;
background: red;
z-index: 2000;


`

const TipUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ease;
  font-family: Nunito;
  z-index: 1000;
  
`

const TipImage = styled.img`
  width: 10vh;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1vh;
  
`

export const Tip = ({ image='/bottle-empty.png', setShowFact, showFact, tip='beans', setFact, position, progress}) => {

    const handleClick = () => {

        if(progress[position]){
        setShowFact(!showFact)
        setFact(tip)
        } else{return}

        
    }
 
  return (
            <TipUI onClick={handleClick}>
              <TipImage style={{
                  filter: progress[position] ? 'grayscale(0%)': 'grayscale(100%)',
                  opacity: progress[position] ? '100%': '10%',
                  cursor: progress[position] ? 'pointer' : 'auto'
              }}src={image}/>
            </TipUI>     
  )
}

