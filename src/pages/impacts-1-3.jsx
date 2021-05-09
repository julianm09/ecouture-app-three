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
    'Click to pick up the microfibers from the ocean'
  )

  return (
    <>
      <Container>

      <CompletionCard completeImage="/factory.png" completeTask={completeTask} completeMessage="You've unlocked a tip!" completeFact="Try purchasing clothing made from recycled materials to avoid adding to emissions."/>


        <Information>
        Clothing is one of the leading drivers of climate change, responsible for 8% of all carbon emissions more than all international flights combined.
        </Information>

        <Menu
          hide={hide}
          setHide={setHide}
          logo='/logo-small-blue.png'
          iconColor={colors.blue}
          three={true}
        />

        <ResultsUI>click the smoke to lessen emissions.</ResultsUI>


        <div
          style={{
            position:'relative',
            
            display: 'flex',
            background: 'red',
           
            width: '100px'

          }}>
        <img
          src='/grey-cloud.png'
          onClick={(e) => handleClick(e)}
          style={{
            
            animationDelay: '1s',
            width:'100px',
            zIndex: '200',
            opacity: '0%',
            animation: 'smoke 3s infinite',
            position:'absolute',
            cursor: 'pointer',

          }}
        />

        <img
          src='/grey-cloud.png'
          onClick={(e) => handleClick(e)}
          style={{
            cursor: 'pointer',
            width:'100px',
            animationDelay: '0.2s',
            zIndex: '200',
            opacity: '0%',
            animation: 'smoke 3s infinite',
            position:'absolute',
            left: '-50px'
          }}
        />

        <img
          src='/grey-cloud.png'
          onClick={(e) => handleClick(e)}
          style={{
           
            animationDelay: '0.5s',
            width:'100px',
            zIndex: '200',
            opacity: '0%',
            animation: 'smoke 3s infinite',
            position:'absolute',
            left: '50px',
            cursor: 'pointer',
          }}
        />

        </div>

        <img
          style={{
            position: 'absolute',
            bottom: '20vh',
            width: '200px',
            zIndex: '100',
          }}
          src='/factory.png'
        />
        <img
          style={{
            position: 'absolute',
            bottom: '0vh',
            width: '100%',
            zIndex: '0',
            height: '50vh',
          }}
          src='/grass.png'
        />
      </Container>
    </>
  )
}

export default Impact
