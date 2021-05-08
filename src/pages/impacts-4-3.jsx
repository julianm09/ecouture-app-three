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





    if (count == 2) {


      document.getElementById('grass').style.animation = '2s grass ease reverse',

      
      /* setInstructions('swipe up to see how you can help') */
    setTimeout(()=> {
      setCompleteTask(true)
    }, 500)

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

      {/* change image here  */}

      <CompletionCard completeImage="/sheep.png" completeTask={completeTask} completeMessage="You've unlocked a task!" completeFact="To reduce the microfibers you produce, buy natural textiles and try washing less with cool water."/>

        <Information>
          U.S. and Canadian households release over 870 tons of plastic
          microfibers into the ocean every year from laundry alone.
        </Information>

        <Menu
          hide={hide}
          setHide={setHide}
          logo='/logo-small-blue.png'
          iconColor={colors.blue}
          three={true}
        />

        <ResultsUI>Click to save the sheep from ovegrazing</ResultsUI>

        {/* do animations here  */}


        <img
          
          style={{
            
            
            position: 'absolute',
            width:"100vw",
            zIndex: '0',
            bottom: '0',
            height: '40%'
            
          }}
          src='/sand.png'
        />

        <img
          
          id="grass"
          style={{
            position: 'absolute',
            animation: '10s grass ease forwards',
            width:"100vw",
            zIndex: '0',
            cursor: 'pointer',
            bottom: '0',
            height: '50%',
            transition: '2s ease'
          }}
          src='/grass.png'
        />

        <img
          onClick={handleClick}
          style={{
            position: 'absolute',
            width:"150px",
            zIndex: '0',
            cursor: 'pointer',
            right: '55vw',
            bottom: '20vh',
            animation:'1s sheep ease infinite'
          }}
          src='/sheep.png'
        />

        <img
          onClick={handleClick}
          style={{
            position: 'absolute',
            width:"200px",
            zIndex: '0',
            cursor: 'pointer',
            right: '15vw',
            bottom: '20vh',
            animation:'1s sheep ease infinite'
          }}
          src='/sheep.png'
        />







        {/* do animations here  */}


      </Container>
    </>
  )
}

export default Impact
