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
  position: relative
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
    document.getElementById('ice').style.animation = 'icegrow 2s ease forwards, 5s waves ease infinite'
    count++

    setTimeout(() => {
      setCompleteTask(true)
    }, 1500)
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

      <CompletionCard completeImage="/iceberg.png" completeTask={completeTask} completeMessage="You've unlocked a task!" completeFact="Try to compose a majority of your wardrobe from used clothing, as the fashion industry contributes more than 10% of global carbon emissions annually."/>

        <Information>
          In the last 25 years, our Earth has lost 28 trillion tonnes of ice.
        </Information>

        <Menu
          hide={hide}
          setHide={setHide}
          logo='/logo-small-blue.png'
          iconColor={colors.blue}
          three={true}
        />

        <ResultsUI>click to make the ice come back</ResultsUI>

        {/* do animations here  */}

        <img
          onClick={(e) => handleClick(e)}
          style={{
            position: 'absolute',
            bottom: '0vh',
            width: '100%',
            height: '50%',
            animation: '3s waves ease infinite',
          }}
          src='/water.png'
        />
        <img
          onClick={(e) => handleClick(e)}
          style={{
            position: 'absolute',
            bottom: '0vh',
            width: '100%',
            height: '50%',

            animation: '4s waves-2 ease infinite',

            zIndex: '400',
          }}
          src='/water-2.png'
          />


          <img
          onClick={(e) => handleClick(e)}
            style={{
              bottom:'0vh',
              position:'absolute',
              maxHeight:'800px',
              height: '50%',
              animation: '5s waves ease infinite',
            }}
          src='/iceberg.png'
          id='ice'
          />





        {/* do animations here  */}


      </Container>
    </>
  )
}

export default Impact
