import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from './color'

const AboutResourcesContUI = styled.div`
  height: 75px;
  width: 365px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  font-family: Nunito;
`
const AboutButtonUI = styled.div`
  height: 75px;
  width: 182.5px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px 0px 0px 10px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RightButtonUI = styled.div`
  height: 75px;
  width: 182.5px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 10px 10px 0px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`



export const AboutResourcesCont = ({ margin, bgColor = colors.green, buttonText = 'Resources', mySwitch, setMySwitch }) => {



  const handleClick = () => {

    setMySwitch(!mySwitch)

  }

  return (
    <AboutResourcesContUI
      style={{
        margin: margin,
      }}>

      <AboutButtonUI
        onClick={() => setMySwitch(false)}

        style={{
          background: mySwitch ? bgColor : "white",
          color: mySwitch ? "white" : bgColor,
          boxShadow: mySwitch ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none",
        }}>
        About
      </AboutButtonUI>

      <RightButtonUI
        onClick={() => setMySwitch(true)}

        style={{
          background: mySwitch ? "white" : bgColor,
          color: mySwitch ? bgColor : "white",
          boxShadow: mySwitch ? "none" : "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        {buttonText}
      </RightButtonUI>
    </AboutResourcesContUI>
  )
}
