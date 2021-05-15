import ThreeCanvas from '../components/layout/_canvas'
import { Menu } from '../components/Menu'
/* import '../styles/index.module.css'*/
import React, { useState } from 'react'
import { colors } from '@/components/color'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Wave from 'react-wavify'
import { useRouter } from 'next/router'
import { RoundBlueButton } from '@/components/RoundBlueButton'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute; 
  
  
`
export const CompletionCardUI = styled.div`
  width: 90vw;
  height: 80vh;
  background: ${colors.blue};
  top: 15vw;
  z-index: 1000;
  border-radius: 10px;
  border: 1px solid white;;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10vh 0 10vh 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  transition: 0.5s ease;
  position: absolute; 
  left: 5vw;
  top: 2.5vh;
  z-index: 10000000;
  
`

export const CompletionInformation = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
  font-family: Nunito;
`

export const CompletionFact = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
  font-family: Nunito;
  text-align: center;
`

export const Information = styled.div`
  width: 80vw;
  min-height: 100px;
  position: absolute;
  top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  font-weight: 700;
  font-family: Nunito;
`
const Space = styled.div`
  width: 10px;
`

export const ResultsUI = styled.div`
  width: 90vw;
  min-height: 100px;
  position: absolute;
  bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Nunito;
  z-index: 500;
  animation: 3s blink infinite;
`

const Plastic = styled.img`
  width: 20vw;

  z-index: 200;
  position: absolute;
  bottom: 35vh;
  animation: float 3s infinite;
  cursor: pointer;
  max-width: 100px;
  padding: 10px;
`

const RoundBlueButtonUI = styled.div `
height: 50px;
width: 80%;
border-radius: 10px;
background-color: ${colors.green};
margin-top: 20px;
font-family: 'Nunito',sans-serif;
font-size: 18;
color: white;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
cursor: pointer;
`

export const CheckpointCard = ({ completeImage="microfiber.png", completeMessage="Your Eco Score Could be Better!", completeFact="The recent increase in fast fashion has polluted our air and water. complete the tasks to increase your score to bring the stars back!"}) => {

const [completeTask, setCompleteTask] = useState(false)
  return (


        <CompletionCardUI
          style={{
            transform: completeTask ? 'translateX(-100vw)' : 'translateX(0vw)',
          }}
        >
          <CompletionInformation>{completeMessage}</CompletionInformation>

          <img
            style={{
              width: '100px',
            }}
            src={completeImage}
          />

          <CompletionFact>
            {completeFact}
          </CompletionFact>


          <RoundBlueButtonUI onClick={() => setCompleteTask(true)}>got it!</RoundBlueButtonUI>
        </CompletionCardUI>


  )
}

