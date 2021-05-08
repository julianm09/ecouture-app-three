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
import {CompletionCard} from '../components/CompletionCard'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
`


const Information = styled.div`
  width: 80vw;
  min-height: 100px;
  position: absolute;
  top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue};
  font-size: 16px;
  font-weight: 700;
  font-family: Nunito;
`


const ResultsUI = styled.div`
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


const Impact = () => {
  const props = useSpring({
    config: { duration: 2250 },
    number: 70,
    from: { number: 0 },
  })

  let count = 0

  const router = useRouter()

  const handleClick = (e) => {
    document.getElementById('wave').style.animation = 'waveDown 2s ease forwards'
    count++

    setTimeout(() => {
      setCompleteTask(true)
    }, 2000)
  }

  const [completeTask, setCompleteTask] = useState(false)

  const [hide, setHide] = useState(false)

  const [instructions, setInstructions] = useState(
    'Click to pick up the microfibers from the ocean'
  )

  return (
    <>
      <Container>

      {/* change image here  */}

      <CompletionCard completeImage="/building.png" completeTask={completeTask} completeMessage="You've unlocked a task!" completeFact="Try to shop locally more often than not, as emissions from transportation contributes to the melting of our ice caps and the expansion of our oceans."/>

        <Information>
          Sea levels are currently rising at a rate of 1/8 of an inch every year.
        </Information>

        <Menu
          hide={hide}
          setHide={setHide}
          logo='/logo-small-blue.png'
          iconColor={colors.blue}
          three={true}
        />

        <ResultsUI>click to stop the water</ResultsUI>

        {/* do animations here  */}


        <img style={{
          position:'absolute',
          bottom:'0vh',
          width:'100%',
          height:'50%'
        }}
        src='/grass.png'
        />

        <img style={{
          position:'absolute',
          bottom:'20vh',
          height:'50%',
          left: '-5vw',
          zIndex:'1'
        }}
        src='/building.png'
        />

        <img style={{
          position:'absolute',
          bottom:'10vh',
          height:'40%',
          left: '20vw',
          zIndex:'1'
        }}
        src='/building.png'
        />

        <img style={{
          position:'absolute',
          bottom:'20vh',
          height:'40%',
          left: '40vw',
          zIndex:'0'
        }}
        src='/building.png'
        />

        <img
          onClick={(e) => handleClick(e)}
          style={{
            position: 'absolute',
            bottom: '-20vh',
            width: '100%',
            height: '50%',
            animation: '30s waterUp ease forwards',
            zIndex: '400',
            transition: 'all 2s ease-in'
          }}
          src='/water-2.png'
          id='wave'
        />


        {/* do animations here  */}


      </Container>
    </>
  )
}

export default Impact
