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
    e.target.style.display = 'none'
    count++

    if (count == 3) {
      setCompleteTask(true)
      /* setInstructions('swipe up to see how you can help') */
    }
  }

  const [completeTask, setCompleteTask] = useState(false)

  const [hide, setHide] = useState(false)

  const [instructions, setInstructions] = useState(
    'click to pick up the microfibers from the ocean'
  )

  return (
    <>
      <Container>

      {/* change image here  */}

      <CompletionCard completeImage="/grey-cloud.png" completeTask={completeTask} completeMessage="You've unlocked a tip!" completeFact="To help lessen water pollution try purchasing clothing from companies that use a carbon based dyeing process"/>

        <Information>
        Fashion causes water-pollution problems, too. Textile dyeing is the world’s second-largest polluter of water, since the water leftover from the dyeing process is often dumped into ditches, streams, or rivers.

        </Information>

        <Menu
          hide={hide}
          setHide={setHide}
          logo='/logo-small-blue.png'
          iconColor={colors.blue}
          three={true}
        />

        <ResultsUI>click to clean up the river</ResultsUI>

        <img
          src='/water.png'
          style={{
            position: 'absolute',
            bottom: '0vh',
            width: '100%',
            height: '50%',
            animation: '3s waves ease infinite',
          }}
        />

        <img
        src='/oil-drum.png'
        onClick={(e) => handleClick(e)}
        style={{
          position:'absolute',
          width: '350px',
          marginTop: '50px',
          marginLeft: '-80px',
          animation: 'oilDrum 1s linear infinite',
        }}
        />

        <img
          src='/oil-2.png'
          onClick={(e) => handleClick(e)}
          style={{
            position:'absolute',
            width: '200px',
            marginTop: '250px',
            marginLeft: '150px',
            zIndex: '1',
            animation: 'oilTwoFloat 3s ease infinite',

          }}
        />

        <img
          src='/oil.png'
          onClick={(e) => handleClick(e)}
          style={{
            position:'absolute',
            width: '300px',
            marginTop: '350px',
            marginLeft: '-50px',
            zIndex: '200',
            animation: 'oilFloat 10s ease infinite',
          }}
        />
        
        <img
          src='/water-2.png'
          style={{
            position: 'absolute',
            bottom: '0vh',
            width: '100%',
            height: '50%',

            animation: '4s waves-2 ease infinite',

            zIndex: '400',
          }}
        />


      </Container>
    </>
  )
}

export default Impact
